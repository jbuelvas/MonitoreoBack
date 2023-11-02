import { Test, TestingModule } from '@nestjs/testing';
import { AreaInteresController } from './area-interes.controller';

describe('AreaInteresController', () => {
  let controller: AreaInteresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreaInteresController],
    }).compile();

    controller = module.get<AreaInteresController>(AreaInteresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
