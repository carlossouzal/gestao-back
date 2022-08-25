import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export type KeyType = "CPF" | "CNPJ" | "PHONE" | "EMAIL" | "RANDOM";

export const keyType = ["CPF", "CNPJ", "PHONE", "EMAIL", "RANDOM"];

@Entity()
export class Chave{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'enum',
    enum: keyType
  })
  Type: KeyType;

  @Column()
  chave: string;
}