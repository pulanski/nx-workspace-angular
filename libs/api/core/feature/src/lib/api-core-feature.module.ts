import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // @todo: test todos
  // @body: test that both the todo plugin is activated as well as the ranger plugin
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot()],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreFeatureModule {}
