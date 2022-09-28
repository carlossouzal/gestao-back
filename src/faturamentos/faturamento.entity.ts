import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type PeriodoFaturamento = "SEMANAL" | "QUINZENAL" | "MENSAL";
export type TipoCobranca = "ENTREGAS" | "FIXO";

export const periodoFaturamento = ["SEMANAL", "QUINZENAL", "MENSAL"];
export const tipoCobranca = ["ENTREGAS", "FIXO"];

@Entity()
export class Faturamento{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
        type: 'enum',
        enum: periodoFaturamento
      })
    periodoFaturamento?: PeriodoFaturamento;

    @Column({
        nullable: true,
        type: 'enum',
        enum: tipoCobranca
      })
    tipoCobranca?: TipoCobranca;

    @Column({nullable: true})
    diaFechamento?: number; 

    @Column({nullable: true})
    vencimento?: number; 

    @Column({type: 'numeric', precision: 10, scale: 2, nullable: true})
    valorPeriodo?: number;

    @Column({type: 'numeric', precision: 10, scale: 2, nullable: true})
    adicional_1?: number;
    
    @Column({type: 'numeric', precision: 10, scale: 2, nullable: true})
    adicional_2?: number;

    @Column({nullable: true})
    cobrarSemEntrega?:boolean;

    @Column({nullable: true})
    instrucoes?: string;

    @Column({nullable: true})
    observacoes?: string;

    @Column({nullable: true})
    email?: string;
}