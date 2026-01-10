import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsUUID } from "class-validator";
import { EstadoOrden, EstadoOrdenlista } from "../../enum/order.enum.js";

export class ActualizarEstadoOrden {
  @ApiProperty()
  @IsUUID(4) // "Version (4) de UUID"
  id: string;

  @ApiProperty({ enum: EstadoOrdenlista })
  @IsEnum(EstadoOrdenlista, {
    message: `Estados valido de una orden: ${EstadoOrdenlista}`,
  })
  estado: EstadoOrden;
}
