import { Controller, Get } from '@nestjs/common';

@Controller('feed')
export class ApiFeedController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
