import { Controller, Get } from '@nestjs/common';
import { GradesApiAdminService } from './grades-api-admin.service';

@Controller()
export class GradesApiAdminController {
  constructor(private readonly gradesApiAdminService: GradesApiAdminService) {}

  @Get()
  getHello(): string {
    return this.gradesApiAdminService.getHello();
  }
}
