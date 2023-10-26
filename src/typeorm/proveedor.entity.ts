import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'proveedor_id',
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
  alias: string;

  @Column({
    nullable: false,
    default: '',
  })
  url_consulta_imagen: string;

  @Column({
    nullable: true,
    default: '',
  })
  url_vista_imagen: string;

  @Column({
    nullable: true,
    default: '',
  })
  api_key: string;

  @Column({
    nullable: true,
    default: '',
  })
  url_access_token: string;

  @Column({
    nullable: true,
    default: '',
  })
  client_id: string;

  @Column({
    nullable: true,
    default: '',
  })
  client_secret: string;

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