import { Controller, Delete, Get, Param, Post, Patch, Request } from '@nestjs/common';
import { ClientService } from './clients.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService){}

  @Get()
  async findAll(){
    return this.clientService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id:number){
    return this.clientService.findById(id);
  }

  @Post('create')
  async create(@Request() req){
    return this.clientService.create(req.body);
  }

  @Delete(":id/delete")
  async delete(@Param('id') id: number){
    return this.clientService.delete(id);
  }
  
  @Patch(':id/update')
  async update(@Param('id') id: number, @Request() req){
    return this.clientService.update(id, req.body);
  }
}
