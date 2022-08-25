import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("await_price")
export class AwaitPrice{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'wait_1', type: 'numeric', precision: 10, scale: 2})
  wait1: number;

  @Column({name: 'wait_2', type: 'numeric', precision: 10, scale: 2})
  wait2: number;

  @Column({name: 'wait_3', type: 'numeric', precision: 10, scale: 2})
  wait3: number;

  @Column({name: 'wait_4', type: 'numeric', precision: 10, scale: 2})
  wait4: number;

  @Column({name: 'wait_5', type: 'numeric', precision: 10, scale: 2})
  wait5: number;

  @Column({name: 'wait_6', type: 'numeric', precision: 10, scale: 2})
  wait6: number;
}