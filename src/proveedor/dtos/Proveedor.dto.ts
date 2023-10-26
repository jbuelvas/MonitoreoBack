import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class ProveedorDto {
  // Básicos
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  proveedor: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  coordenadas: [number[][]];

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fecha_inicial: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fecha_final: string;

  // Generales
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  item_types: string[];
  
  // Filtro
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  filter_type: string;

  // Configuración
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  config_type: string[];

  // GeometryFilter
  @IsOptional()
  @IsString()
  @ApiProperty()
  gf_type: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  gf_coordenadas: [number[][]];

  @IsOptional()
  @IsString()
  @ApiProperty()
  gf_field_name: string;

  // UpdateFilter
  @IsOptional()
  @IsString()
  @ApiProperty()
  uf_gte: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  uf_field_name: string;

  // DataRangeFilter
  @IsOptional()
  @IsString()
  @ApiProperty()
  drf_gte: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  drf_lte: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  drf_field_name: string;

  // StringInFilter
  @IsOptional()
  @IsString()
  @ApiProperty()
  sif_config: string[];

  @IsOptional()
  @IsString()
  @ApiProperty()
  sif_field_name: string;

  // AssetFilter
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  af_config: string[];

  // RangeFilter
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  rf_gte: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  rf_lte: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  rf_field_name: string;

  // PermissionFilter
  @IsOptional()
  @IsString()
  @ApiProperty()
  pf_config: string[];

  // NumberInFilter
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  nif_config: number[];

  @IsOptional()
  @IsString()
  @ApiProperty()
  nif_field_name: string;
}