import { GRADE_STATUS, ResultFactory } from '..';
import { resultMock, studentEntityMock } from './mock/result.factory.mock';

describe('Status Utils', () => {
  it('Shoud return a student grade result', () => {
    const result = ResultFactory.create(
      studentEntityMock,
      GRADE_STATUS.DISAPPROVED,
    );
    expect(result).toEqual(resultMock);
  });
});
