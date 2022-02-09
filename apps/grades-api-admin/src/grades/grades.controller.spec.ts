import { Test, TestingModule } from '@nestjs/testing';
import { GradesController } from './grades.controller';
import { GradesDto } from './grades.dto';
import { GradesService } from './grades.service';

describe('GradesController', () => {
  let controller: GradesController;

  const gradesServiceMock = {
    createOrUpdate: jest.fn(),
  };

  const makeParams = (): GradesDto => ({
    studentId: 1,
    studentName: 'any name',
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 4,
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradesController],
      providers: [
        {
          provide: GradesService,
          useValue: gradesServiceMock,
        },
      ],
    }).compile();

    controller = module.get<GradesController>(GradesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call GradesService createOrUpdate with correct params', async () => {
    const params = makeParams();
    await controller.createOrUpdate(params);
    expect(gradesServiceMock.createOrUpdate).toHaveBeenCalledWith(params);
  });
});
