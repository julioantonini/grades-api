export type StudentGradesResult = {
  id: number;
  name: string;
  studentGrade: GradesResult;
};

export type GradesResult = {
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  average: number;
};
