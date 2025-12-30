import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { Transform } from "class-transformer";
import { EstadoOrden, EstadoOrdenlista } from "../../enum/order.enum.js";

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  precio_total: number;

  @IsNumber()
  @IsPositive()
  items_totales: number;

  @IsOptional()
  @IsEnum(EstadoOrdenlista, {
    //Se crea una lista, ya que @IsEnum, espera un array no un objeto
    message: `Estados valido de una orden: ${EstadoOrdenlista}`,
  })
  estado: EstadoOrden = EstadoOrden.PENDIENTE; //esto es una opcion por defecto
  /*
    '= EstadoOrden.PENDIENTE'
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

/*
  EstadoOrdenlista, es un array de validacion, @IsEnum, necesita iterar sobre
  una lista de valores, los enums desaparecen en tiempo de ejecucion
*/

/*
  En 'estado', es un valor, un tipo de los tipos EstadoOrden,
  si fuera ': EstadoOrdenlista', indicaria que es de tipo array, 
  no un valor unico, postdata: EstadoOrden se convierte a un objeto, donde
  la propiedad de estado debe ser igual a una de sus propiedades
*/
