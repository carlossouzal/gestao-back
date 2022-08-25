import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Account } from './bank.entity';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(Account)
    private bankRepository: Repository<Account>
  ){}

  async findAll(): Promise<Account[]>{
    return await this.bankRepository.find();
  }

  async create(account: Account): Promise<Account | null>{
    return await this.bankRepository.save(account);
  }

  async delete(id: number): Promise<DeleteResult>{
    return await this.bankRepository.delete({id});
  }

  async findById(id:number): Promise<Account | null>{
    return await this.bankRepository.findOneBy({id});
  }

  async update(newAccount: Account): Promise<Account>{
    return await this.bankRepository.merge(newAccount);
  }
}
