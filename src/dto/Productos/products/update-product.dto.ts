import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { ProductDto } from "./Product.dto.js";
import { IsNumber, IsPositive } from "class-validator";

// DTO PARA EL GateWay
export class ProductProperties extends PartialType(ProductDto) {
  /*
   El Gateway, no necesita vaidar el id en el dto, ademas, ya esta siendo
   validado con el ParseIntPipe
  */
}

// DTO PARA EL MICROSERVICIO
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

/*
Recibe un objeto por separado en el body(el id + las propiedades del producto),
ya que, el id debe ir en el body, porque no hay URL (endpoint param ":id", que reciba ese id, en el microservicio servidor),
por eso, debe enviar un objeto "nuevo", updateProductDto(el id + las propiedades del producto),

El "id", se usa para encontrar al producto que se quiere actualizar, (por eso un nuevo dto (updateProductDto)).
No te preocupes por la validacion, ParseIntPipe, ya valida el id por ti.
*/
