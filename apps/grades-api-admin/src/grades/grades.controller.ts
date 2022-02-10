import { Body, Controller, Get, Post } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesDto, StudentGradesResult } from './types';

@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Post()
  createOrUpdate(
    @Body() gradesParams: GradesDto,
  ): Promise<StudentGradesResult> {
    return this.gradesService.createOrUpdate(gradesParams);
  }

  @Get()
  findAll(): Promise<StudentGradesResult[]> {
    return this.gradesService.findAll();
  }
}
