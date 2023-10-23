import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'plan_id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  nombre: string;

  @Column({
    nullable: false,
    default: '',
  })
  descripcion: string;

  @Column({
    nullable: false,
    default: '',
  })
  pais: string;

  @Column({
    nullable: false,
    default: '',
  })
  valor: string;

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
