import { Controller, Get, Param } from '@nestjs/common';
import { GradesService } from './grades.service';
import { LOGGER_CONTEXT, LoggerService } from '@logger/logger';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StudentGradesResult } from '@domain/domain';

@Controller('grades')
@ApiTags('Grades')
export class GradesController {
  constructor(
    private readonly gradesService: GradesService,
    private readonly loggerService: LoggerService,
  ) {
    this.loggerService.setContext(LOGGER_CONTEXT.GRADES_API);
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    type: StudentGradesResult,
  })
  async findOne(@Param('id') id: string) {
    try {
      this.loggerService.log(`Fetching student grade with id: ${id}`);
      return await this.gradesService.findOne(+id);
    } catch (error) {
      this.loggerService.logError(
        `Error fetching student grade with id: ${id}`,
        error,
      );

      throw error;
    }
  }
}
