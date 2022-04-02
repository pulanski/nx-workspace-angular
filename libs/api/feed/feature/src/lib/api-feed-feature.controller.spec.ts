import { Test } from '@nestjs/testing';
import { ApiFeedController } from './api-feed.controller';

describe('ApiFeedController', () => {
  let controller: ApiFeedController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiFeedController],
    }).compile();

    controller = module.get(ApiFeedController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
