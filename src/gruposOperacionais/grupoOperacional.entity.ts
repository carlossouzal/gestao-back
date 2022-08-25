import { Address } from "src/address/address.entity";
import { Client } from "src/clients/client.entity";
import { Entregador } from "src/entregadores/entregador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("grupo_operacional")
export class GrupoOperacional{
  @PrimaryGeneratedColumn()
  id: number;

  name: string;
  
  @OneToOne(() => Address, {cascade: true, nullable: true})
  @JoinColumn()
  address: Address;

  @ManyToMany(() => Client)
  @JoinTable()
  clients: Client[];

  @ManyToMany(() => Entregador)
  @JoinTable()
  entregadores: Entregador[];

  @Column({nullable: true})
  maxDistancy: number;
  @Column({nullable: true})
  qtdMax: number;
  @Column({nullable: true})
  proximity: number;
  @Column({nullable: true})
  posAttribution: number;
}