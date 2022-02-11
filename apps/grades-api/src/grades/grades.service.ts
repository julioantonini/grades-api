import {
  GRADE_STATUS,
  ResultFactory,
  StudentGradesResult,
} from '@domain/domain';
import { GradesResultRaw } from '@domain/domain/types/grades-result.raw.type';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Utils } from '@utils/utils';
import { StudentRepository } from 'detabase-pg/database-pg/repository/student.repository';

@Injectable()
export class GradesService {
  constructor(private readonly studentRepository: StudentRepository) {}

  public async findOne(id: number): Promise<StudentGradesResult> {
    const student = await this.studentRepository.findByIdRaw(id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    const status = this.getStatus(student.average);

    return this.formatResult(student, status);
  }

  private getStatus(average: number): GRADE_STATUS {
    return Utils.status.calculate(average);
  }

  private formatResult(
    student: GradesResultRaw,
    status: GRADE_STATUS,
  ): StudentGradesResult {
    return ResultFactory.create(student, status);
  }
}
