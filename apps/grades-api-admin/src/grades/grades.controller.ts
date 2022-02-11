import { StudentGradesResult } from '@domain/domain';
import { LoggerService, LOGGER_CONTEXT } from '@logger/logger';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GradesService } from './grades.service';
import { GradesDto } from './types';

@Controller('grades')
@ApiTags('Grades')
export class GradesController {
  constructor(
    private readonly gradesService: GradesService,
    private readonly loggerService: LoggerService,
  ) {
    this.loggerService.setContext(LOGGER_CONTEXT.GRADES_API_ADMIN);
  }

  @Post()
  @ApiBody({ type: GradesDto })
  @ApiResponse({
    status: 201,
    type: StudentGradesResult,
  })
  createOrUpdate(
    @Body() gradesParams: GradesDto,
  ): Promise<StudentGradesResult> {
    try {
      this.loggerService.log(
        `Creating or updating student grade with params: ${JSON.stringify(
          gradesParams,
        )}`,
      );
      return this.gradesService.createOrUpdate(gradesParams);
    } catch (error) {
      this.loggerService.logError(
        `Error creating or updating student grade with params ${JSON.stringify(
          gradesParams,
        )}`,
        error,
      );
      throw error;
    }
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [StudentGradesResult],
  })
  findAll(): Promise<StudentGradesResult[]> {
    try {
      this.loggerService.log('Fetching all student grades');
      return this.gradesService.findAll();
    } catch (error) {
      this.loggerService.logError('Error fetching all student grades', error);
      throw error;
    }
  }
}
