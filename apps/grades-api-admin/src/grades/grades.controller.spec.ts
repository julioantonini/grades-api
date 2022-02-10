import { Test, TestingModule } from '@nestjs/testing';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';
import { makeGradesParamsMock } from './mock/make-grades-params.mock';

describe('GradesController', () => {
  let sut: GradesController;
  let service: GradesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradesController],
      providers: [
        {
          provide: GradesService,
          useValue: {
            createOrUpdate: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    sut = module.get<GradesController>(GradesController);
    service = module.get<GradesService>(GradesService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should call GradesService createOrUpdate with correct params', async () => {
    const params = makeGradesParamsMock();
    await sut.createOrUpdate(params);
    expect(service.createOrUpdate).toHaveBeenCalledWith(params);
  });

  it('should call GradesService findAll', async () => {
    await sut.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });
});
