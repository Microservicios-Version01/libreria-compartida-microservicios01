import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { Transform } from "class-transformer";
import { EstadoOrden } from "../../enum/order.enum.js";

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  precio_total: number;

  @IsNumber()
  @IsPositive()
  items_totales: number;

  //? Direccion ¿?
  // direccion_envio: String;
  @IsString()
  direccion_calle: String;
  @IsString()
  direccion_numero: number;
  @IsString()
  direccion_codigopostal: number;
  @IsString()
  direccion_ciudad: String;
  @IsString()
  direccion_provincia: String;
  @IsString()
  direccion_pais: String;

  @IsEnum(EstadoOrden, {
    message: `Possible status values are ${EstadoOrden}`,
  })
  @IsOptional()
  estado: EstadoOrden = EstadoOrden.PENDIENTE; //esto es una opcion por defecto
  /*
    Se puede hacer directamente en el schema, 
    esto es un ejemplo, que tambien se puede 
    hacer en los dtos
  */

  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  pagado: Boolean = false;
}
