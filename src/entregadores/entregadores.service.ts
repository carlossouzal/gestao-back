import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Entregador } from './entregador.entity';

@Injectable()
export class EntregadoresService {
  constructor(
    @InjectRepository(Entregador)
    private entregadorRepository: Repository<Entregador>
  ){}

  async findAll(): Promise<Entregador[]>{
    return await this.entregadorRepository.find();
  }

  async create(entregador: Entregador): Promise<Entregador | null>{
    return await this.entregadorRepository.save(entregador);
  }

  async delete(id: number): Promise<DeleteResult>{
    return await this.entregadorRepository.delete({id});
  }

  async findById(id:number): Promise<Entregador | null>{
    return await this.entregadorRepository.findOneBy({id});
  }

  async update(newEntregador: Entregador): Promise<Entregador>{
    return await this.entregadorRepository.merge(newEntregador);
  }
}
