import { Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { GerenciaisService } from './gerenciais.service';

@Controller('gerencial')
export class GerenciaisController {
  constructor(private gerenciaisService: GerenciaisService){}

  @Get()
  async findAll(){
    return await this.gerenciaisService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id:number){
    return await this.gerenciaisService.findById(id);
  }

  @Post('create')
  async create(@Request() req){
    const client = req.body;
    return this.gerenciaisService.create(client);
  }

  @Delete(":id/delete")
  async delete(@Param('id') id: number){
    return this.gerenciaisService.delete(id);
  }
  
  @Patch(':id/update')
  async update(@Param('id') id: number, @Request() req){
    const client = req.body;
    client.id = id;

    return this.gerenciaisService.update(client);
  }
}
