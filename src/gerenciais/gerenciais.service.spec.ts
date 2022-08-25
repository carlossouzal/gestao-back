import { Test, TestingModule } from '@nestjs/testing';
import { GerenciaisService } from './gerenciais.service';

describe('GerenciaisService', () => {
  let service: GerenciaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerenciaisService],
    }).compile();

    service = module.get<GerenciaisService>(GerenciaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
