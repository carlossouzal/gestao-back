import { Client } from "src/clients/client.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  address: string;
  
  @Column({nullable: true})
  complement: string;

  @Column({nullable: false})
  cep: string;
};