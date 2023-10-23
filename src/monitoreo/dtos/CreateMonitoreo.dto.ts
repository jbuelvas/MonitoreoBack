import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateMonitoreoDto {
    @IsNotEmpty()
    proveedor: string;

    @IsNotEmpty()
    metodo: string;

    @IsNotEmpty()
    cobertura_nubes: string;

    @IsNotEmpty()
    frecuencia: string;

    @IsNotEmpty()
    fecha_inicio: Date;

    @IsNotEmpty()
    usuario_creacion: string;
}