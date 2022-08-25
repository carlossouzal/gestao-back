import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/address/address.entity';
import { Account } from 'src/banks/bank.entity';
import { Chave } from 'src/pix/pix.entity';
import { User } from 'src/users/user.entity';
import { Vehicle } from 'src/vehicles/vehicle.entity';
import { Entregador } from './entregador.entity';
import { EntregadoresController } from './entregadores.controller';
import { EntregadoresService } from './entregadores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entregador, Address, User, Account, Chave, Vehicle])],
  providers: [EntregadoresService],
  exports: [EntregadoresService],
  controllers: [EntregadoresController]
})
export class EntregadoresModule {}
