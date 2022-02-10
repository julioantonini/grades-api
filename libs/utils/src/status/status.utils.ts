import { GRADE_STATUS } from '.';

const calculate = (average: number): GRADE_STATUS => {
  if (average < 4) {
    return GRADE_STATUS.DISAPPROVED;
  }

  if (average >= 4 && average < 6) {
    return GRADE_STATUS.IN_RECOVERY;
  }

  return GRADE_STATUS.APPROVED;
};

export const status = { calculate };
