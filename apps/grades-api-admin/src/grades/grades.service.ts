import { Injectable } from '@nestjs/common';
import { GradesDto } from './grades.dto';

@Injectable()
export class GradesService {
  public async createOrUpdate(params: GradesDto) {
    return null;
  }

  public async findAll() {
    return null;
  }
}
