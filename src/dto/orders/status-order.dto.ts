import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { EstadoOrden, EstadoOrdenlista } from "../../enum/order.enum.js";

export class EstadoDto {
  @ApiProperty({
    description: "Estado actual del pedido de pizza",
    enum: EstadoOrden,
    example: EstadoOrden.PENDIENTE,
    enumName: "EstadoOrden",
  })
  @IsEnum(EstadoOrdenlista, {
    //Se crea una lista, ya que @IsEnum, espera un array no un objeto
    message: `Estados valido de una orden: ${EstadoOrdenlista}`,
  })
  estado: EstadoOrden;
}
