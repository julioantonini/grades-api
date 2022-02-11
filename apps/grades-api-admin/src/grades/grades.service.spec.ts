import { GRADE_STATUS, StudentGradesResult } from '@domain/domain';
import { Test, TestingModule } from '@nestjs/testing';
import {
  StudentEntity,
  StudentGradeEntity,
} from 'detabase-pg/database-pg/entity';
import { StudentGradeRepository } from 'detabase-pg/database-pg/repository/student-grade.repository';
import { StudentRepository } from 'detabase-pg/database-pg/repository/student.repository';
import { GradesService } from './grades.service';
import {
  makeCreateResultMock,
  makeGradeMock,
  makeStudentGradeMock,
  makeStudentMock,
  makeStudentWithGradeMock,
} from './mock/grades.service.mock';
import { makeGradesParamsMock } from './mock/make-grades-params.mock';

describe('GradesService', () => {
  let sut: GradesService;
  let studentRepository: StudentRepository;
  let studentGradeRepository: StudentGradeRepository;

  const studentRepositoryMock = {
    findById: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    findAll: jest.fn(),
  };

  const studentGradeRepositoryMock = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GradesService,
        {
          provide: StudentRepository,
          useValue: studentRepositoryMock,
        },
        {
          provide: StudentGradeRepository,
          useValue: studentGradeRepositoryMock,
        },
      ],
    }).compile();

    sut = module.get<GradesService>(GradesService);
    studentGradeRepository = module.get<StudentGradeRepository>(
      StudentGradeRepository,
    );
    studentRepository = module.get<StudentRepository>(StudentRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  describe('Create', () => {
    let studentMock: { id: number; name: string };
    let studentWithGradeMock: StudentEntity;
    let gradeMock: {
      n1: number;
      n2: number;
      n3: number;
      n4: number;
    };
    let studentGradeMock: StudentGradeEntity;
    let createResultMock: StudentGradesResult;

    beforeAll(() => {
      studentMock = makeStudentMock();
      studentWithGradeMock = makeStudentWithGradeMock() as StudentEntity;
      gradeMock = makeGradeMock();
      studentGradeMock = makeStudentGradeMock() as StudentGradeEntity;
      createResultMock = makeCreateResultMock() as StudentGradesResult;

      studentRepositoryMock.findById.mockResolvedValue(null);
      studentRepositoryMock.create.mockReturnValue(studentMock);
      studentRepositoryMock.save.mockResolvedValue(studentWithGradeMock);
      studentGradeRepositoryMock.create.mockReturnValue(gradeMock);
      studentGradeRepositoryMock.save.mockResolvedValue(studentGradeMock);
    });

    it('Should call studentRepository.findById with correct values', async () => {
      const params = makeGradesParamsMock();
      await sut.createOrUpdate(params);
      expect(studentRepository.findById).toHaveBeenCalledWith(1, [
        'studentGrade',
      ]);
      expect(studentRepository.findById).toBeCalledTimes(1);
    });

    it('Should call service.create with correct values', async () => {
      const params = makeGradesParamsMock();
      const serviceSpy = jest.spyOn(sut as any, 'create');
      await sut.createOrUpdate(params);
      expect(serviceSpy).toHaveBeenCalledWith(params);
      expect(serviceSpy).toBeCalledTimes(1);
    });

    it('Should call studentRepository.create with correct values', async () => {
      const params = makeGradesParamsMock();
      const reposSpy = jest.spyOn(studentRepository, 'create');
      await sut.createOrUpdate(params);
      expect(reposSpy).toHaveBeenCalledWith({
        id: 1,
        name: 'student name',
      });
      expect(reposSpy).toBeCalledTimes(1);
    });

    it('Should call studentGradeRepository.create with correct values', async () => {
      const params = makeGradesParamsMock();
      const repositorySpy = jest.spyOn(studentGradeRepository, 'create');
      await sut.createOrUpdate(params);
      expect(repositorySpy).toHaveBeenCalledWith(gradeMock);
      expect(repositorySpy).toBeCalledTimes(1);
    });

    it('Should call studentGradeRepository.save with correct values', async () => {
      const params = makeGradesParamsMock();
      const repositorySpy = jest.spyOn(studentGradeRepository, 'save');
      await sut.createOrUpdate(params);
      expect(repositorySpy).toHaveBeenCalledWith(gradeMock);
      expect(repositorySpy).toBeCalledTimes(1);
    });

    it('Should call studentRepository.save with correct values', async () => {
      const params = makeGradesParamsMock();
      const repositorySpy = jest.spyOn(studentRepository, 'save');
      await sut.createOrUpdate(params);
      expect(repositorySpy).toHaveBeenCalledWith(studentWithGradeMock);
      expect(repositorySpy).toBeCalledTimes(1);
    });

    it('Should call service.formatResult with correct values', async () => {
      const params = makeGradesParamsMock();
      const spy = jest.spyOn(sut as any, 'formatResult');
      await sut.createOrUpdate(params);
      expect(spy).toHaveBeenCalledWith(
        studentWithGradeMock,
        GRADE_STATUS.DISAPPROVED,
      );
    });

    it('Should create a student grade', async () => {
      const params = makeGradesParamsMock();
      const result = await sut.createOrUpdate(params);
      expect(result).toEqual(createResultMock);
    });
  });

  ///

  describe('Update', () => {
    let studentMock: { id: number; name: string };
    let studentWithGradeMock: StudentEntity;
    let gradeMock: {
      n1: number;
      n2: number;
      n3: number;
      n4: number;
    };
    let studentGradeMock: StudentGradeEntity;
    let updateResultMock: StudentGradesResult;

    beforeAll(() => {
      studentMock = makeStudentMock();
      studentWithGradeMock = makeStudentWithGradeMock() as StudentEntity;
      gradeMock = makeGradeMock();
      studentGradeMock = makeStudentGradeMock() as StudentGradeEntity;
      updateResultMock = makeCreateResultMock() as StudentGradesResult;

      studentRepositoryMock.findById.mockResolvedValue(studentWithGradeMock);
      studentRepositoryMock.create.mockReturnValue(studentMock);
      studentRepositoryMock.save.mockResolvedValue(studentWithGradeMock);
      studentGradeRepositoryMock.create.mockReturnValue(gradeMock);
      studentGradeRepositoryMock.save.mockResolvedValue(studentGradeMock);
    });

    it('Should call service.update with correct values', async () => {
      const params = makeGradesParamsMock();
      const serviceSpy = jest.spyOn(sut as any, 'update');
      await sut.createOrUpdate(params);
      expect(serviceSpy).toHaveBeenCalledWith(studentWithGradeMock, params);
      expect(serviceSpy).toBeCalledTimes(1);
    });

    it('Should call studentGradeRepository.save with correct values on update', async () => {
      const params = makeGradesParamsMock();
      const repositorySpy = jest.spyOn(studentGradeRepository, 'save');
      await sut.createOrUpdate(params);
      expect(repositorySpy).toHaveBeenCalledWith(studentGradeMock);
      expect(repositorySpy).toBeCalledTimes(1);
    });

    it('Should call service.formatResult with correct values on update', async () => {
      const params = makeGradesParamsMock();
      const spy = jest.spyOn(sut as any, 'formatResult');
      await sut.createOrUpdate(params);
      expect(spy).toHaveBeenCalledWith(
        studentWithGradeMock,
        GRADE_STATUS.DISAPPROVED,
      );
    });

    it('Should create a student grade on update', async () => {
      const params = makeGradesParamsMock();
      const result = await sut.createOrUpdate(params);
      expect(result).toEqual(updateResultMock);
    });
  });

  describe('findAll', () => {
    const studentWithGradeMock = makeStudentWithGradeMock() as StudentEntity;
    const resultMock = makeCreateResultMock() as StudentGradesResult;

    beforeAll(() => {
      studentRepositoryMock.findAll.mockResolvedValue([
        studentWithGradeMock,
        studentWithGradeMock,
      ]);
    });

    it('Should return all students with grades', async () => {
      const result = await sut.findAll();
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual(resultMock);
    });
  });
});
