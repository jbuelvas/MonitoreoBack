import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resultado {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'resultado_id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  archivo_resultante: string;

  @Column({
    nullable: false,
    default: true,
  })
  activo: boolean;

  @Column({ nullable: false, default: '', })
  usuario_creacion: string;

  @Column({ type: "timestamp", default: () => "now()", nullable: false, })
  fecha_creacion: Date;

  @Column({ nullable: true, default: ''})
  usuario_actualizacion: string;

  @Column({ type: "timestamp", nullable: true })
  fecha_actualizacion: Date;
}
