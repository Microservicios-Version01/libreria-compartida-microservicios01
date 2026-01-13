import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsUUID } from "class-validator";
import { EstadoOrden, EstadoOrdenlista } from "../../../enum/order.enum.js";

export class ActualizarEstadoOrden {
  @ApiProperty({
    description: "Identificador único del pedido a actualizar (UUID v4)",
    example: "550e8400-e29b-41d4-a716-446655440000",
    format: "uuid",
  })
  @IsUUID(4) // "Version (4) de UUID"
  id: string;

  @ApiProperty({
    description: "Nuevo estado del pedido de pizza",
    enum: EstadoOrdenlista,
    example: "entregado",
    enumName: "EstadoOrden",
  })
  @IsEnum(EstadoOrdenlista, {
    message: `Estados validos de una orden: ${EstadoOrdenlista}`,
  })
  estado: EstadoOrden;
}
