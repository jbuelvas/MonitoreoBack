import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Analisis {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'analisis_id',
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
  grupo: string;

  @Column({
    nullable: false,
    default: '',
  })
  url: string;

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
