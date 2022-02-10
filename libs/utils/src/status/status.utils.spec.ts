import { Utils } from '..';
import { GRADE_STATUS } from './grades-status.enum';

describe('Status Utils', () => {
  it('Shoud return disapproved status because the value is less than 4', () => {
    const result = Utils.status.calculate(3.99);
    expect(result).toEqual(GRADE_STATUS.DISAPPROVED);
  });

  it('Shoud return in recovery because the value is greater than or equal to 4 and less than 6', () => {
    const result = Utils.status.calculate(4);
    expect(result).toEqual(GRADE_STATUS.IN_RECOVERY);
  });

  it('Shoud return in recovery because the value is the value greater than or equal to 6', () => {
    const result = Utils.status.calculate(6);
    expect(result).toEqual(GRADE_STATUS.APPROVED);
  });
});
