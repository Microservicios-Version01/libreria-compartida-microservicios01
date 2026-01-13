import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrdenItemDto } from "./order-item.dto.js";

export class CreateOrderDto {
  @ApiProperty({
    description:
      "Lista de pizzas a incluir en el pedido. Debe contener al menos una pizza",
    type: [OrdenItemDto],
    example: [
      { productoId: 1, cantidad: 2 },
      { productoId: 3, cantidad: 1 },
    ],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrdenItemDto)
  items: OrdenItemDto[];
}
