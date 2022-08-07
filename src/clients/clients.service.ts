import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

export type Client = {
  id?: number,
  name: string,
  phone: string,
  cpfOrCnpj: string,
  address: string,
  complement: string
};

@Injectable()
export class ClientService {
  private clients = [];

  async findAll(): Promise<Client[]>{
    return this.clients;
  }

  async create(client: Client): Promise<Client | null>{
    client.id = Math.floor(Math.random() * Number.MAX_VALUE);
    this.clients.push(client);
    return client;
  }

  async delete(id: number): Promise<Client | null>{
    const client = await this.findById(id);
    this.clients = this.clients.filter(c => c !== client);    
    return client;
  }

  async findById(id:number): Promise<Client | null>{
    const client = this.clients.find(client => client.id = id);
    if(!client){
      throw new HttpException('Client not found!', HttpStatus.NOT_FOUND);
    }
    return client;
  }

  async update(id:number, newClient: Client): Promise<Client | null>{
    const client = await this.delete(id);
    newClient.id = client.id;
    this.clients.push(newClient);
    return newClient;
  }
}
