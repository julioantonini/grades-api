import { Test, TestingModule } from '@nestjs/testing';
import { DatabasePgService } from './database-pg.service';

describe('DatabasePgService', () => {
  let service: DatabasePgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabasePgService],
    }).compile();

    service = module.get<DatabasePgService>(DatabasePgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
