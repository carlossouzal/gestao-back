import { Controller, Delete, Get, Param, Patch, Post, Request } from "@nestjs/common";
import { BanksService } from "./banks.service";

@Controller('bank')
export class BanksController {
  constructor(private bankService: BanksService ){}

  @Get()
  async findAll(){
    return await this.bankService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id:number){
    return await this.bankService.findById(id);
  }

  @Post('create')
  async create(@Request() req){
    const client = req.body;
    return this.bankService.create(client);
  }

  @Delete(":id/delete")
  async delete(@Param('id') id: number){
    return this.bankService.delete(id);
  }
  
  @Patch(':id/update')
  async update(@Param('id') id: number, @Request() req){
    const client = req.body;
    client.id = id;

    return this.bankService.update(client);
  }
}