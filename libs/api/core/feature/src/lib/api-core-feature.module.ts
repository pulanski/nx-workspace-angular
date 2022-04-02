import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // TODO add imports
  // testing to see if the todo github action is configured correctly
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot()],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreFeatureModule {}
