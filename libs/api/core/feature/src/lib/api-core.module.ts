import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from '@nx-workspace/api/feed/feature';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'linkedin',
      autoLoadEntities: true,
      synchronize: true, // shouldn't be used in production - may lose data
    }),
    FeedModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
