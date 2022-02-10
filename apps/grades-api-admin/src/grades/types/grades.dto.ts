import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class GradesDto {
  @ApiProperty()
  @IsNumber()
  @Min(1)
  studentId: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value.trim())
  studentName: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(10)
  n1: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(10)
  n2: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(10)
  n3: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(10)
  n4: number;
}
