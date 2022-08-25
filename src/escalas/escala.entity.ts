import { Client } from "src/clients/client.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Escala{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;
  @Column()
  date: Date;
  @Column('time')
  init: Date;
  @Column('time')
  finish: Date;
  @Column('time')
  interval: Date;
  @Column()
  Title:String;
  
  @OneToOne(() => Client, {cascade: true, nullable: true})
  @JoinColumn()
  client: Client;

  @Column()
  vagas: number;
}