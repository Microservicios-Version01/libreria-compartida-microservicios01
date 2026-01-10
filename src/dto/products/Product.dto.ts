import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";

export class ProductDto {
  /*
   * Paginaciones
   */
  // @IsPositive()
  // @IsOptional()
  // @Type(() => Number) // transformer: lo convierte a numero
  // page: number = 1; // a diferencia de los pipes, no los valida, solo los transforma

  // @IsPositive()
  // @IsOptional()
  // @Type(() => Number)
  // limit: number = 10;

  @ApiProperty()
  @IsString()
  @Type(() => String)
  nombre: String;

  @ApiProperty()
  @IsString()
  @Type(() => String)
  tipo: String;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Type(() => String)
  descripcion: String;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  precio: Number;

  // @IsNumber()
  // @IsPositive()
  // @Type(() => Number)
  // precio_venta: Number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  es_novedad: Boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  es_favorito: Boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  disponible: Boolean;
}
