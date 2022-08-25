import { Modal } from "src/modais/modal.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export type PricingType = "ZONA" | " BAIRRO" | "DISTANCIA" | "ZERA";
export const pricingType = ["ZONA", " BAIRRO", "DISTANCIA", "ZERA"];

@Entity("price_default")
export class PriceDefault{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Modal, {cascade: true, nullable: true})
  @JoinColumn()
  vehicle: Modal;

  @Column({type: 'numeric', precision: 10, scale: 2})
  pricePerPoint: number;

  @Column({
    nullable: false,
    type: 'enum',
    enum: pricingType
  })
  pricing: PricingType;
}