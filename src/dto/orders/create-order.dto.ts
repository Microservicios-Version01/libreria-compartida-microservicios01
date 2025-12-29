import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { Transform } from "class-transformer";
import { EstadoOrden, EstadoOrdenlista } from "../../enum/order.enum";

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
  direccion_calle: string;
  @IsNumber()
  @IsPositive()
  direccion_numero: number;
  @IsNumber()
  @IsPositive()
  direccion_codigopostal: number;
  @IsString()
  direccion_ciudad: string;
  @IsString()
  direccion_provincia: string;
  @IsString()
  direccion_pais: string;

  @IsEnum(EstadoOrdenlista, {
    //Se crea una lista, ya que @IsEnum, espera un array no un objeto
    message: `Possible status values are ${EstadoOrdenlista}`,
  })
  @IsOptional()
  estado_orden: EstadoOrden = EstadoOrden.PENDIENTE; //esto es una opcion por defecto
  /*
    Se puede hacer directamente en el schema, 
    esto es un ejemplo, que tambien se puede 
    hacer en los dtos
  */
  @IsOptional()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  @IsBoolean()
  pagado?: boolean = false;
}
