import { Test, TestingModule } from '@nestjs/testing';
import { AreaInteresService } from './area-interes.service';

describe('AreaInteresService', () => {
  let service: AreaInteresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreaInteresService],
    }).compile();

    service = module.get<AreaInteresService>(AreaInteresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
