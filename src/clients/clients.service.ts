import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>
  ){}

  async findAll(): Promise<Client[]>{
    return await this.clientRepository.find();
  }

  async create(client: Client): Promise<Client | null>{
    return await this.clientRepository.save(client);
  }

  async delete(id: number): Promise<DeleteResult>{
    return await this.clientRepository.delete({id});
  }

  async findById(id:number): Promise<Client | null>{
    return await this.clientRepository.findOneBy({id});
  }

  async update(newClient: Client): Promise<Client>{
    return await this.clientRepository.merge(newClient);
  }
}
