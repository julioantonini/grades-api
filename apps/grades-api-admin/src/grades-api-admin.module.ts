import { Module } from '@nestjs/common';
import { GradesApiAdminController } from './grades-api-admin.controller';
import { GradesApiAdminService } from './grades-api-admin.service';

@Module({
  imports: [],
  controllers: [GradesApiAdminController],
  providers: [GradesApiAdminService],
})
export class GradesApiAdminModule {}
