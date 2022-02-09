import { Test, TestingModule } from '@nestjs/testing';
import { GradesApiAdminController } from './grades-api-admin.controller';
import { GradesApiAdminService } from './grades-api-admin.service';

describe('GradesApiAdminController', () => {
  let gradesApiAdminController: GradesApiAdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GradesApiAdminController],
      providers: [GradesApiAdminService],
    }).compile();

    gradesApiAdminController = app.get<GradesApiAdminController>(GradesApiAdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gradesApiAdminController.getHello()).toBe('Hello World!');
    });
  });
});
