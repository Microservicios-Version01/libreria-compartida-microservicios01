import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsBoolean,
  IsDecimal,
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

  @ApiProperty({
    description: "Nombre del producto",
    example: "Pizza Margarita",
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: "Descripción del producto",
    example: "Tomate, mozzarella, albahaca fresca y aceite de oliva",
    required: false,
  })
  @IsOptional()
  @IsString()
  descripcion: string;

  @ApiProperty({
    description: "URL de la imagen del producto",
    example: "https://example.com/pizza.jpg",
  })
  @IsString()
  imagen: string;

  @ApiProperty({
    description: "Precio base del producto",
    example: "35.99",
    type: String,
  })
  @IsPositive()
  @IsDecimal({ decimal_digits: "0,2", force_decimal: true })
  precio: string;

  @ApiProperty({
    description: "Indica si el producto está disponible",
    example: true,
    required: false,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  disponible: boolean;

  @ApiProperty({
    description: "Indica si es un producto nuevo",
    example: false,
    required: false,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  es_novedad: boolean;

  @ApiProperty({
    description: "Indica si es producto favorito",
    example: false,
    required: false,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  es_favorito: boolean;

  @ApiProperty({
    description: "ID de la categoría del producto (1:vegetariana), (2:pasta)",
    example: "1",
  })
  @IsString()
  categoryId: number;
}
