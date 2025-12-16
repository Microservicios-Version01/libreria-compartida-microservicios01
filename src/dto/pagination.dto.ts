import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number) // transformer: lo convierte a numero
  page: number = 1; // a diferencia de los pipes, no los valida, solo los transforma

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit: number = 10;
}
