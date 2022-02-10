import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class GradesDto {
  @IsNumber()
  @Min(1)
  studentId: number;

  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value.trim())
  studentName: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  n1: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  n2: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  n3: number;

  @IsNumber()
  @Min(0)
  @Max(10)
  n4: number;
}
