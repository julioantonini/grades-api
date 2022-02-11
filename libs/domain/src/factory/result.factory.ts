import { StudentEntity } from 'detabase-pg/database-pg/entity';
import { GRADE_STATUS, StudentGradesResult } from '..';
import { GradesResultRaw } from '../types/grades-result.raw.type';

export class ResultFactory {
  static create(
    student: StudentEntity | GradesResultRaw,
    status: GRADE_STATUS,
  ): StudentGradesResult {
    const result = this.isStudentEntity(student)
      ? this.fromEntity(student, status)
      : this.fromResultRaw(student, status);

    return result;
  }

  private static isStudentEntity(
    student: StudentEntity | GradesResultRaw,
  ): student is StudentEntity {
    return (student as StudentEntity).studentGrade !== undefined;
  }

  private static fromEntity(
    student: StudentEntity,
    status: GRADE_STATUS,
  ): StudentGradesResult {
    const { id, name, studentGrade } = student;
    const result: StudentGradesResult = {
      id,
      name,
      status,
      studentGrade: {
        n1: studentGrade.n1,
        n2: studentGrade.n2,
        n3: studentGrade.n3,
        n4: studentGrade.n4,
        average: studentGrade.average,
      },
    };
    return result;
  }

  private static fromResultRaw(
    student: GradesResultRaw,
    status: GRADE_STATUS,
  ): StudentGradesResult {
    const { id, name, n1, n2, n3, n4, average } = student;
    const result: StudentGradesResult = {
      id,
      name,
      status,
      studentGrade: {
        n1,
        n2,
        n3,
        n4,
        average,
      },
    };
    return result;
  }
}
