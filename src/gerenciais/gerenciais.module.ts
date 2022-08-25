import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/address/address.entity';
import { GerenciaisController } from './gerenciais.controller';
import { GerenciaisService } from './gerenciais.service';
import { Gerencial } from './gerencial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gerencial, Address])],
  providers: [GerenciaisService],
  exports: [GerenciaisService],
  controllers: [GerenciaisController]
})
export class GerenciaisModule {}
