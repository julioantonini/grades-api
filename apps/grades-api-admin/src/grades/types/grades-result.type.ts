import { ApiProperty } from '@nestjs/swagger';

export class GradesResult {
  @ApiProperty()
  n1: number;

  @ApiProperty()
  n2: number;

  @ApiProperty()
  n3: number;

  @ApiProperty()
  n4: number;

  @ApiProperty()
  average: number;
}

export class StudentGradesResult {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: GradesResult })
  studentGrade: GradesResult;
}
