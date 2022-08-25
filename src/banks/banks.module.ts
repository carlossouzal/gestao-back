import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './bank.entity';
import { BanksController } from './banks.controller';
import { BanksService } from './banks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [BanksService],
  exports: [BanksService],
  controllers: [BanksController]
})
export class BanksModule {}
