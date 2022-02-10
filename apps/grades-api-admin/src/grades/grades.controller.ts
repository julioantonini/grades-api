import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GradesService } from './grades.service';
import { GradesDto, StudentGradesResult } from './types';

@Controller('grades')
@ApiTags('Grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Post()
  @ApiBody({ type: GradesDto })
  @ApiResponse({
    status: 201,
    type: StudentGradesResult,
  })
  createOrUpdate(
    @Body() gradesParams: GradesDto,
  ): Promise<StudentGradesResult> {
    return this.gradesService.createOrUpdate(gradesParams);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [StudentGradesResult],
  })
  findAll(): Promise<StudentGradesResult[]> {
    return this.gradesService.findAll();
  }
}
