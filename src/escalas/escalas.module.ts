import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escala } from './escala.entity';
import { EscalasController } from './escalas.controller';
import { EscalasService } from './escalas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Escala])],
  controllers: [EscalasController],
  exports: [EscalasService],
  providers: [EscalasService]
})
export class EscalasModule {}
