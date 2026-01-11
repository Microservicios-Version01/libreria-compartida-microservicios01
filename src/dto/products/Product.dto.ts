import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
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

  @ApiProperty({
    description: "Nombre de la pizza",
    example: "Pizza Margarita",
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: "Subcategoria de producto",
    example: "Pizza, Pasta, bebida, Oferta de verano, etc",
  })
  @IsString()
  tipo: string;

  @ApiProperty({
    description: "Ingredientes y descripción de la pizza",
    example: "Tomate, mozzarella, albahaca fresca y aceite de oliva",
    required: false,
  })
  @IsOptional()
  @IsString()
  descripcion: string;

  @ApiProperty({
    description: "Precio de la pizza",
    example: 35.99,
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  // @Type(() => Number)
  precio: number;

  // @IsNumber()
  // @IsPositive()
  // @Type(() => Number)
  // precio_venta: Number;

  @ApiProperty({
    description: "Indica si es una pizza nueva en el menú",
    example: true,
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
    description: "Indica si la pizza es favorita de los clientes",
    example: true,
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
    description: "Indica si la pizza está disponible para pedidos",
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
}
