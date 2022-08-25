import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modal{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  isDefault: boolean;
  @Column()
  requestDimensions: boolean;
  @Column()
  canScripting: boolean;
  @Column()
  icon: string;
}