import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { Transform } from "class-transformer";
import { EstadoOrden } from "../../enum/order.enum";

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  precio_total: number;

  @IsNumber()
  @IsPositive()
  items_totales: number;

  //? Arreglar direccion
  @IsString()
  direccion_envio: String;
  // direccion_calle        String
  // direccion_numero       Int
  // direccion_codigopostal Int
  // direccion_ciudad       String
  // direccion_provincia    String
  // direccion_pais         String

  @IsEnum(EstadoOrden, {
    message: `Possible status values are ${EstadoOrden}`,
  })
  @IsOptional()
  estado: EstadoOrden = EstadoOrden.PENDIENTE;

  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  pagado: Boolean = false;
}
