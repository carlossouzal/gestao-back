import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ClientsModule } from './clients/clients.module';
import { RolesGuard } from './roles/roles.guards';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { AddressModule } from './address/address.module';
import { Client } from './clients/client.entity';
import { Address } from './address/address.entity';
import { GerenciaisModule } from './gerenciais/gerenciais.module';
import { EntregadoresModule } from './entregadores/entregadores.module';
import { Entregador } from './entregadores/entregador.entity';
import { Gerencial } from './gerenciais/gerencial.entity';
import { Vehicle } from './vehicles/vehicle.entity';
import { Account } from './banks/bank.entity';
import { Chave } from './pix/pix.entity';
import { GrupoOperacional } from './gruposOperacionais/grupoOperacional.entity';
import { Modal } from './modais/modal.entity';
import { OptionalService } from './optionalService/service.entity';
import { Escala } from './escalas/escala.entity';
import { PriceDefault } from './defaultPrice/defaultPrice.entity';
import { AwaitPrice } from './awaitPrice/awaitPrice.entity';
import { BanksModule } from './banks/banks.module';
import { EscalasModule } from './escalas/escalas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'infinity',
      entities: [
        User,
        Client,
        Address,
        Entregador,
        Gerencial,
        Vehicle,
        Account,
        Chave,
        Vehicle,
        GrupoOperacional,
        Modal,
        OptionalService,
        Escala,
        PriceDefault
      ],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ClientsModule,
    AddressModule,
    GerenciaisModule,
    EntregadoresModule,
    AwaitPrice,
    BanksModule,
    EscalasModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
})
export class AppModule {}
