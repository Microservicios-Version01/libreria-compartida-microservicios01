import { PartialType } from "@nestjs/mapped-types";
import { ProductDto } from "./Product.dto.js";
import { IsNumber, IsPositive } from "class-validator";
// (PartialType): UpdateProductDto de la clase ProductDto, pero sus campos (de la clase padre) son opcionales
export class UpdateProductDto extends PartialType(ProductDto) {
  /* Entre microservicios, a la hora de conectarse mediante TCP,
    TIENE que ir el id, del producto */
  @IsNumber()
  @IsPositive()
  id: number;
}
