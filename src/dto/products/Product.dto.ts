import { Transform, Type } from "class-transformer";
import { IsBoolean, IsOptional, IsPositive } from "class-validator";

export class ProductDto {
  // @IsPositive()
  // @IsOptional()
  // @Type(() => Number) // transformer: lo convierte a numero
  // page: number = 1; // a diferencia de los pipes, no los valida, solo los transforma

  // @IsPositive()
  // @IsOptional()
  // @Type(() => Number)
  // limit: number = 10;

  @IsOptional()
  @Type(() => String)
  nombre: String;

  @IsOptional()
  @Type(() => String)
  tipo: String;

  @IsOptional()
  @Type(() => String)
  descripcion: String;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  precio: Number;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  precio_venta: Number;

  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  es_novedad: Boolean;

  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  es_favorito: Boolean;
}
