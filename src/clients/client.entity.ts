import { Address } from "src/address/address.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export type ChargingType = "FATURA" | "COLETA" | "ENTREGA" | "ONLINE" | "CREDITO";
export type PersonType = "PESSOA_FISICA" | "PESSOA_JURIDICA";

export const chargingType = ["FATURA", "COLETA", "ENTREGA", "ONLINE", "CREDITO"];
export const personType = ["PESSOA_FISICA", "PESSOA_JURIDICA"];

@Entity()
export class Client{
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, {cascade: true, nullable: false})
  @JoinColumn()
  user: User;

  @Column({nullable: true})
  corporateName: string;

  @Column({nullable: true})
  stateRegistry: string;

  @Column({nullable: true})
  municipalRegistry: string;

  @Column({nullable: false})
  responsable: string;

  @Column({nullable: true})
  phone: string;

  @Column({nullable: true})
  cellPhone: string;

  @OneToOne(() => Address, {cascade: true, nullable: true})
  @JoinColumn()
  address: Address;

  @Column({
      nullable: false,
      type: 'enum',
      enum: chargingType
    })
  chargingType: ChargingType;

  @Column({nullable: true})
  birthDate: Date;

  @Column({
    type: 'enum',
    enum: personType,
    default: "PESSOA_JURIDICA"
  })
  personType: PersonType;

  @Column({nullable: true})
  cnpjOrCpf: string;

  @Column({default: true})
  active: boolean;
};  