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

  @IsString()
  @Type(() => String)
  nombre: String;

  @IsString()
  @Type(() => String)
  tipo: String;

  @IsOptional()
  @IsString()
  @Type(() => String)
  descripcion: String;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  precio: Number;

  // @IsNumber()
  // @IsPositive()
  // @Type(() => Number)
  // precio_venta: Number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  es_novedad: Boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  es_favorito: Boolean;

  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  disponible: Boolean;
}
