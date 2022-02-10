import { GRADE_STATUS, StudentGradesResult } from '@domain/domain';
import { StudentEntity } from 'detabase-pg/database-pg/entity';

export const studentEntityMock = {
  id: 1,
  name: 'student name',
  studentGrade: { n1: 1, n2: 2, n3: 3, n4: 4, id: 1, average: 2.5 },
} as StudentEntity;

export const resultMock: StudentGradesResult = {
  id: 1,
  name: 'student name',
  status: GRADE_STATUS.DISAPPROVED,
  studentGrade: { average: 2.5, n1: 1, n2: 2, n3: 3, n4: 4 },
};
