import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/address/address.entity';
import { Client } from './client.entity';
import { ClientController } from './clients.controller';
import { ClientService } from './clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Address])],
  providers: [ClientService],
  exports: [ClientService],
  controllers: [ClientController]
})
export class ClientsModule {}
