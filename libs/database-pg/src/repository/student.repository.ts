import { EntityRepository, Repository } from 'typeorm';
import { StudentEntity } from '../entity';
import { StudentEntityRelations } from '../entity/student.entity';

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity> {
  findById(
    id: number,
    relations: StudentEntityRelations[],
  ): Promise<StudentEntity> {
    return this.findOne({ id }, { relations });
  }

  findAll(relations: StudentEntityRelations[]): Promise<StudentEntity[]> {
    return this.find({ relations });
  }
}
