import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enables CORS between port 8080 and 4200
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
