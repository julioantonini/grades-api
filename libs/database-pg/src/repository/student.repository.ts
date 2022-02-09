import { EntityRepository, Repository } from 'typeorm';
import { StudentEntity } from '../entity';

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity> {
  findById(id: number): Promise<StudentEntity> {
    return this.findOne({ id });
  }
}
