import { Test, TestingModule } from '@nestjs/testing';
import { GerenciaisController } from './gerenciais.controller';

describe('GerenciaisController', () => {
  let controller: GerenciaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerenciaisController],
    }).compile();

    controller = module.get<GerenciaisController>(GerenciaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
