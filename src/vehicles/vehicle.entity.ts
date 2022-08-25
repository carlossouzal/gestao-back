import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
  @Column()
  plate: string;
  @Column()
  model: string;
  @Column()
  color: string;
  @Column({nullable: true})
  document: string;
  @Column({nullable: true})
  observation: string;
}