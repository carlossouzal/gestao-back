import { Module } from '@nestjs/common';
import { ClientController } from './clients.controller';
import { ClientService } from './clients.service';

@Module({
  providers: [ClientService],
  exports: [ClientService],
  controllers: [ClientController]
})
export class ClientsModule {}
