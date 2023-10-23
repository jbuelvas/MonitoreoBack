import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Monitoreo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'monitoreo_id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  frecuencia: string;

  @Column({
    nullable: false,
    default: '',
  })
  proveedor: string;

  @Column({
    nullable: false,
    default: '',
  })
  metodo: string;

  @Column({
    nullable: false,
    default: '',
  })
  cobertura_nubes: string;

  @Column({ type: "timestamp", nullable: false, })
  fecha_inicio: Date;

  @Column({ type: "timestamp", nullable: true, })
  fecha_fin: Date;

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
