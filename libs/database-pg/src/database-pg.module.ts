import { Module } from '@nestjs/common';
import { DatabasePgService } from './database-pg.service';

@Module({
  providers: [DatabasePgService],
  exports: [DatabasePgService],
})
export class DatabasePgModule {}
