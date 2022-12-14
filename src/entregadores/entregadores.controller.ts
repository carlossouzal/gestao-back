import { Controller, Delete, Get, HttpStatus, Param, ParseFilePipeBuilder, Patch, Post, Request, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EntregadoresService } from './entregadores.service';

@Controller('entregador')
export class EntregadoresController {
  constructor(private entregadorService: EntregadoresService){}

  @Get()
  async findAll(){
    return await this.entregadorService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id:number){
    return await this.entregadorService.findById(id);
  }

  @Post('create')
  async create(@Request() req){
    const entregador = req.body;
    return this.entregadorService.create(entregador);
  }

  @Post('create-file')
  @UseInterceptors(FileInterceptor('file'))
  async createWithFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addMaxSizeValidator({
          maxSize: 5242880
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        }),
    ) file: Express.Multer.File
  ){  
    console.log(file);
  }

  @Delete(":id/delete")
  async delete(@Param('id') id: number){
    return this.entregadorService.delete(id);
  }
  
  @Patch(':id/update')
  async update(@Param('id') id: number, @Request() req){
    const entregador = req.body;
    entregador.id = id;

    return this.entregadorService.update(entregador);
  }
}
