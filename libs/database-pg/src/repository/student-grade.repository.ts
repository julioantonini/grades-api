import { EntityRepository, Repository } from 'typeorm';
import { StudentGradeEntity } from '../entity';

@EntityRepository(StudentGradeEntity)
export class StudentGradeRepository extends Repository<StudentGradeEntity> {
  findById(id: number): Promise<StudentGradeEntity> {
    return this.findOne({ id });
  }
}
