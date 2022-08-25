import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Gerencial } from './gerencial.entity';

@Injectable()
export class GerenciaisService {
  constructor(
    @InjectRepository(Gerencial)
    private gerencialRepository: Repository<Gerencial>
  ){}

  async findAll(): Promise<Gerencial[]>{
    return await this.gerencialRepository.find();
  }

  async create(gerencial: Gerencial): Promise<Gerencial | null>{
    return await this.gerencialRepository.save(gerencial);
  }

  async delete(id: number): Promise<DeleteResult>{
    return await this.gerencialRepository.delete({id});
  }

  async findById(id:number): Promise<Gerencial | null>{
    return await this.gerencialRepository.findOneBy({id});
  }

  async update(newGerencial: Gerencial): Promise<Gerencial>{
    return await this.gerencialRepository.merge(newGerencial);
  }
}
