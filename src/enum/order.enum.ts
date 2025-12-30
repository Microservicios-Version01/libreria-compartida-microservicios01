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

/*
  Los enums, solo existen en tiempo de compilacion, por eso, es que
  se tiene que crear un array (una lista) del enum,
  @IsEnum
*/
