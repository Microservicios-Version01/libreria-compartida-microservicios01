// import { EstadoOrden } from "@prisma/client";

export enum EstadoOrden {
  PENDIENTE = "PENDIENTE",
  ENTREGADO = "ENTREGADO",
  CANCELADO = "CANCELADO",
}

export const EstadoOrdenlista = [
  EstadoOrden.PENDIENTE,
  EstadoOrden.ENTREGADO,
  EstadoOrden.CANCELADO,
];
