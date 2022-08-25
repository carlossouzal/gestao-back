import { Controller, Delete, Get, Param, Post, Patch, Request } from '@nestjs/common';
import { chargingType } from './client.entity';
import { ClientService } from './clients.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService){}

  @Get()
  async findAll(){
    return await this.clientService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id:number){
    return await this.clientService.findById(id);
  }

  @Post('create')
  async create(@Request() req){
    const client = req.body;
    client.chargingType = chargingType[client.chargingType - 1];
    return this.clientService.create(client);
  }

  @Delete(":id/delete")
  async delete(@Param('id') id: number){
    return this.clientService.delete(id);
  }
  
  @Patch(':id/update')
  async update(@Param('id') id: number, @Request() req){
    const client = req.body;
    
    client.chargingType = chargingType[client.chargingType - 1];
    client.id = id;

    return this.clientService.update(client);
  }
}
