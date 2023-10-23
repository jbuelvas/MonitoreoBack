import { Test, TestingModule } from '@nestjs/testing';
import { MonitoreoController } from './monitoreo.controller';

describe('MonitoreoController', () => {
  let controller: MonitoreoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonitoreoController],
    }).compile();

    controller = module.get<MonitoreoController>(MonitoreoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
