import { Injectable } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private stateRepository: Repository<StateEntity>,
  ) {}

  async getAllStates(): Promise<StateEntity[]> {
    return await this.stateRepository.find();
  }
}
