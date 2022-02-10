import { Module } from '@nestjs/common';
import { DatabasePgModule } from 'detabase-pg/database-pg';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';

@Module({
  imports: [DatabasePgModule],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}
