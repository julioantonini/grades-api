import { Injectable } from '@nestjs/common';
import { Utils } from '@utils/utils';
import { GRADE_STATUS } from '@utils/utils/status';
import { StudentEntity } from 'detabase-pg/database-pg/entity';
import { StudentGradeRepository } from 'detabase-pg/database-pg/repository/student-grade.repository';
import { StudentRepository } from 'detabase-pg/database-pg/repository/student.repository';
import { ResultFactory } from './factory/result.factory';
import { GradesDto, StudentGradesResult } from './types';

@Injectable()
export class GradesService {
  constructor(
    private readonly studentRepository: StudentRepository,
    private readonly studentGradeRepository: StudentGradeRepository,
  ) {}

  public async createOrUpdate(params: GradesDto): Promise<StudentGradesResult> {
    const { studentId } = params;
    const existentStudent = await this.studentRepository.findById(studentId, [
      'studentGrade',
    ]);

    const student = existentStudent
      ? await this.update(existentStudent, params)
      : await this.create(params);

    return this.formatResult(student);
  }

  public async findAll(): Promise<StudentGradesResult[]> {
    const studentResponses = await this.studentRepository.findAll([
      'studentGrade',
    ]);

    const students = studentResponses.map((student) =>
      this.formatResult(student),
    );

    return students;
  }

  private getStatus(average: number): GRADE_STATUS {
    return Utils.status.calculate(average);
  }

  private async create(params: GradesDto): Promise<StudentEntity> {
    const { studentId: id, studentName: name, n1, n2, n3, n4 } = params;

    const student = this.studentRepository.create({ id, name });

    const grades = this.studentGradeRepository.create({ n1, n2, n3, n4 });
    const gradesResponse = await this.studentGradeRepository.save(grades);

    student.studentGrade = gradesResponse;
    const studentResponse = await this.studentRepository.save(student);
    return studentResponse;
  }

  private async update(
    student: StudentEntity,
    params: GradesDto,
  ): Promise<StudentEntity> {
    const { studentName, n1, n2, n3, n4 } = params;
    const { studentGrade } = student;

    studentGrade.n1 = n1;
    studentGrade.n2 = n2;
    studentGrade.n3 = n3;
    studentGrade.n4 = n4;

    student.name = studentName;
    student.studentGrade = await this.studentGradeRepository.save(studentGrade);
    const studentResponse = await this.studentRepository.save(student);
    return studentResponse;
  }

  private formatResult(student: StudentEntity): StudentGradesResult {
    const { average } = student.studentGrade;
    const status = this.getStatus(average);
    return ResultFactory.create(student, status);
  }
}
