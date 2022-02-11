import { Injectable } from '@nestjs/common';
import { StudentRepository } from 'detabase-pg/database-pg/repository/student.repository';

@Injectable()
export class GradesService {
  constructor(private readonly studentRepository: StudentRepository) {}

  public async findOne(id: number): Promise<any> {
    const student = await this.studentRepository.findByIdRaw(id);
    return student;
  }
}
