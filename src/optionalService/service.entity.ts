import { Client } from "src/clients/client.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export type OperationType = "SUM" | "MULT";

export const operationType = ["SUM", "MULT"];

@Entity("service_otional")
export class OptionalService{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: operationType
  })
  operation: OperationType;
  @Column()
  value: number;
  @Column()
  isHighlight: boolean;

  @Column()
  description: string;

  @ManyToMany(() => Client)
  @JoinTable()
  clients: Client[];
}