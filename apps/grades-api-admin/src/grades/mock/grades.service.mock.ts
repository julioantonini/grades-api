import { GRADE_STATUS } from '@utils/utils/status';
import { StudentGradesResult } from '../types';

export const makeStudentGradeMock = () => ({
  n1: 1,
  n2: 2,
  n3: 3,
  n4: 4,
  id: 1,
  average: 2.5,
});

export const makeStudentMock = () => ({ id: 1, name: 'student name' });

export const makeGradeMock = () => ({ n1: 1, n2: 2, n3: 3, n4: 4 });

export const makeStudentWithGradeMock = () => {
  const student = makeStudentMock();
  const studentGrade = makeStudentGradeMock();
  return Object.assign({}, student, { studentGrade });
};

export const makeCreateResultMock = () => ({
  id: 1,
  name: 'student name',
  status: 'DISAPPROVED',
  studentGrade: { average: 2.5, n1: 1, n2: 2, n3: 3, n4: 4 },
});
