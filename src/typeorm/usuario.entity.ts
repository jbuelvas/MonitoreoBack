import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AreaInteres } from './area_interes.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'usuario_id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  nombres: string;

  @Column({
    nullable: false,
    default: '',
  })
  apellidos: string;

  @Column({
    name: 'direccion_correo',
    nullable: false,
    default: '',
  })
  correo: string;

  @Column({
    nullable: false,
    default: '',
  })
  telefono: string;

  @Column({
    nullable: false,
    default: '',
  })
  organizacion: string;

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

  @OneToMany(() => AreaInteres, (aoi: AreaInteres) => aoi.usuario)
  public areas: AreaInteres[];
}