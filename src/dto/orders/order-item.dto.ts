import { Type } from "class-transformer";
import { IsNumber, IsPositive } from "class-validator";

export class OrdenItemDto {
  @IsNumber()
  @IsPositive()
  productoId: number;

  @IsNumber()
  @IsPositive()
  cantidad: number;

  @IsNumber()
  @IsPositive()
  sub_total: number;
}
