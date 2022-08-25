import { Address } from "src/address/address.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gerencial{
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

  @Column({nullable: true})
  cnpjOrCpf: string;

  @Column({default: true})
  active: boolean;
}