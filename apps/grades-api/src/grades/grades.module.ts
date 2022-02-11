import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { DatabasePgModule } from 'detabase-pg/database-pg';

@Module({
  imports: [DatabasePgModule],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}
