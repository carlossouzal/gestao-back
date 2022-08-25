import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bank: string;

  @Column()
  agency: string;
  
  @Column()
  account: string;
}