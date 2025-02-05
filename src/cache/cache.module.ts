import { Module } from '@nestjs/common';
import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager';
import { CacheService } from './cache.service';

@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 9000000000, // 1 hour
      // max: 100, // maximum number of items in cache
      // store: 'memory', // caching store (in-memory, redis, etc.)
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
