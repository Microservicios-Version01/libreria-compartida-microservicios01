import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsPositive } from "class-validator";

export class OrdenItemDto {
  @ApiProperty({
    description: "Identificador único de la pizza en el catálogo",
    example: 3,
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  productoId: number;

  @ApiProperty({
    description: "Cantidad de pizzas a incluir en el pedido",
    example: 2,
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  cantidad: number;

  // @IsNumber()
  // @IsPositive()
  // @ApiProperty()
  // sub_total: number;
}
