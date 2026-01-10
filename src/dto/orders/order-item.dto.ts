import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsPositive } from "class-validator";

export class OrdenItemDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  productoId: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  cantidad: number;

  // @IsNumber()
  // @IsPositive()
  // @ApiProperty()
  // sub_total: number;
}
