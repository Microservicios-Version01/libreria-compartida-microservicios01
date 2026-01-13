import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsUrl } from "class-validator";

export class CategoryDto {
  @ApiProperty({
    description: "Nombre de la categoría",
    example: "Pizzas",
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: "URL de la imagen de la categoría",
    example: "https://example.com/pizzas.jpg",
  })
  @IsUrl() // Is URL?
  @IsString()
  imagen: string;

  @ApiProperty({
    description: "Descripción de la categoría",
    example: "Deliciosas pizzas artesanales",
    required: false,
  })
  @IsOptional()
  @IsString()
  descripcion: string;
}
