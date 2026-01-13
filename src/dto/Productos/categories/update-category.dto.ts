import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { CategoryDto } from "./Category.dto.js";
import { IsNumber, IsPositive } from "class-validator";

// DTO para el GateWay
export class CategoryProperties extends PartialType(CategoryDto) {
  /*
   El Gateway, no necesita validar el id en el dto, ademas, ya esta siendo
   validado con el ParseIntPipe
  */
}

// (PartialType): UpdateCategoryDto de la clase CategoryDto, pero sus campos (de la clase padre) son opcionales
export class UpdateCategoryDto extends PartialType(CategoryDto) {
  /* Entre microservicios, a la hora de conectarse,
    TIENE que ir el id, de la categoría */
  @ApiProperty({
    default: 1,
  })
  @IsNumber()
  @IsPositive()
  id: number;
}
