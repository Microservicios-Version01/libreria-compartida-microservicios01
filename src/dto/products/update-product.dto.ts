import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { ProductDto } from "./Product.dto.js";
import { IsNumber, IsPositive } from "class-validator";

// DTO para el GateWay
export class ProductProperties extends PartialType(ProductDto) {
  /*
   El Gateway, no necesita vaidar el id en el dto, ademas, ya esta siendo
   validado con el ParseIntPipe
  */
}

// (PartialType): UpdateProductDto de la clase ProductDto, pero sus campos (de la clase padre) son opcionales
export class UpdateProductDto extends PartialType(ProductDto) {
  /* Entre microservicios, a la hora de conectarse,
    TIENE que ir el id, del producto */
  @ApiProperty({
    default: 1,
  })
  @IsNumber()
  @IsPositive()
  id: number;
}
