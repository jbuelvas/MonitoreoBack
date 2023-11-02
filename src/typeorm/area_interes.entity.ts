import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class AreaInteres {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'area_interes_id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  coordenadas: string;

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

  //Relaciones
  @ManyToOne(() => Usuario, (usuario) => usuario.areas, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_usuario' })
  usuario: Usuario;

  // @OneToMany(() => Imagen, (imagen: Imagen) => imagen.areaInteres)
  // public imagenes: Imagen[];
}