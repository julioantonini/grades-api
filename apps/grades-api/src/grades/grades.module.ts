import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { DatabasePgModule } from 'detabase-pg/database-pg';
import { LoggerModule } from 'libs/logger/src';

@Module({
  imports: [DatabasePgModule, LoggerModule],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}
