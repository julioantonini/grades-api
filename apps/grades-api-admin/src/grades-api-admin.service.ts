import { Injectable } from '@nestjs/common';

@Injectable()
export class GradesApiAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}
