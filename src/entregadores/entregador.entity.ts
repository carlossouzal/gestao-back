import { Address } from "src/address/address.entity";
import { Account } from "src/banks/bank.entity";
import { Chave } from "src/pix/pix.entity";
import { User } from "src/users/user.entity";
import { Vehicle } from "src/vehicles/vehicle.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export type PaymentType = "PERCENTUAL" | "DISTANCE";
export const paymentType = ["PERCENTUAL", "DISTANCE"];

export type Receive = "Banco" | "Pix";
export const receive = ["Banco", "Pix"];

@Entity()
export class Entregador{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  phone: string;
  @Column()
  identifier: string;
  
  @OneToOne(() => User, {cascade: true, nullable: false})
  @JoinColumn()
  user: User;

  @OneToOne(() => Address, {cascade: true, nullable: true})
  @JoinColumn()
  address: Address;

  @Column()
  birthDate: Date;

  @ManyToOne(() => User, {cascade: true, nullable: false})
  @JoinColumn()
  filiacao: User;

  cnh: string;
  rg: string;
  cpf: string;
  dataAdmissao: Date;
  pis: string;
  cnhValidity: Date;
  codEntregador: string;
  imei: string;
  cursoValidity: Date;
  observation: string;

  @OneToOne(() => Vehicle, {cascade: true, nullable: true})
  vehicle: Vehicle[];

  @Column({
    nullable: false,
    type: 'enum',
    enum: paymentType
  })
  payment: PaymentType;

  @Column()
  comission: number;

  @Column()
  documentPayment: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: receive
  })
  paymentReceive: Receive;
  
  @OneToOne(() => Account, {cascade: true, nullable: true})
  @JoinColumn()
  account: Account;

  @OneToOne(() => Chave, {cascade: true, nullable: true})
  @JoinColumn()
  pix: Chave;
}