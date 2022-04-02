import { Module } from '@nestjs/common';
import { ApiFeedController } from './api-feed.controller';

@Module({
  controllers: [ApiFeedController],
  providers: [],
  exports: [],
})
export class ApiFeedModule {}
