import { GRADE_STATUS, ResultFactory } from '..';
import {
  gradesResultRawMock,
  resultMock,
  studentEntityMock,
} from './mock/result.factory.mock';

describe('Status Utils', () => {
  it('Call Result factory with StudentEntity, Shoud return a student grade result', () => {
    const result = ResultFactory.create(
      studentEntityMock,
      GRADE_STATUS.DISAPPROVED,
    );
    expect(result).toEqual(resultMock);
  });

  it('Call Result factory with grades result raw, Shoud return a student grade result', () => {
    const result = ResultFactory.create(
      gradesResultRawMock,
      GRADE_STATUS.DISAPPROVED,
    );
    expect(result).toEqual(resultMock);
  });
});
