import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CrearAreaInteresDto {
  @IsNotEmpty()
  @ApiProperty()
  id_usuario: number;

  @IsNotEmpty()
  @ApiProperty()
  coordenadas: string;
}