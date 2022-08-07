import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){}

  async findAll():Promise< User[] | null >{
    return await this.usersRepository.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOneBy({email});
  }

  async create(user: User): Promise<User | undefined>{
    return await this.usersRepository.save(user);
  }

  async delete(id: number): Promise<DeleteResult>{
    return await this.usersRepository.delete({id});
  }
}
