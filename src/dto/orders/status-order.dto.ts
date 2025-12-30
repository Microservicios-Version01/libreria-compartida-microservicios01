import { IsEnum, IsOptional } from "class-validator";
import { EstadoOrden, EstadoOrdenlista } from "../../enum/order.enum.js";

export class EstadoDto {
  @IsEnum(EstadoOrdenlista, {
    //Se crea una lista, ya que @IsEnum, espera un array no un objeto
    message: `Estados valido de una orden: ${EstadoOrdenlista}`,
  })
  estado: EstadoOrden;
}
