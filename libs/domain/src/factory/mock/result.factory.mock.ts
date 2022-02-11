import { GRADE_STATUS, StudentGradesResult } from '@domain/domain';
import { GradesResultRaw } from '@domain/domain/types/grades-result.raw.type';
import { StudentEntity } from 'detabase-pg/database-pg/entity';

export const studentEntityMock = {
  id: 1,
  name: 'student name',
  studentGrade: { n1: 1, n2: 2, n3: 3, n4: 4, id: 1, average: 2.5 },
} as StudentEntity;

export const gradesResultRawMock = {
  id: 1,
  name: 'student name',
  n1: 1,
  n2: 2,
  n3: 3,
  n4: 4,
  average: 2.5,
} as GradesResultRaw;

export const resultMock: StudentGradesResult = {
  id: 1,
  name: 'student name',
  status: GRADE_STATUS.DISAPPROVED,
  studentGrade: { average: 2.5, n1: 1, n2: 2, n3: 3, n4: 4 },
};
