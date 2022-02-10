import { GRADE_STATUS } from '@utils/utils/status';
import { StudentEntity } from 'detabase-pg/database-pg/entity';
import { StudentGradesResult } from '..';

export class ResultFactory {
  static create(
    student: StudentEntity,
    status: GRADE_STATUS,
  ): StudentGradesResult {
    const { id, name, studentGrade } = student;
    return {
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
  }
}
