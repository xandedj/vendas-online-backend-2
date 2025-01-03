import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    const citiesCache: CityEntity[] = await this.cacheManager.get(
      `state_${stateId}`,
    );
    if (citiesCache) {
      console.log('Cache de Cidades: ', citiesCache);
      return citiesCache;
    }

    const cities = await this.cityRepository.find({
      where: {
        stateId,
      },
    });

    await this.cacheManager.set(`${stateId}`, cities);

    return cities;
  }
}
