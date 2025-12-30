import { IsEnum, IsUUID } from "class-validator";
import { EstadoOrden, EstadoOrdenlista } from "../../enum/order.enum.js";

export class ActualizarEstadoOrden {
  @IsUUID(4) // "Version (4) de UUID"
  id: string;

  @IsEnum(EstadoOrdenlista, {
    message: `Estados valido de una orden: ${EstadoOrdenlista}`,
  })
  estado: EstadoOrden;
}
