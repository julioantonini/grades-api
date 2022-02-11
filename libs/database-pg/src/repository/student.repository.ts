import { GradesResultRaw } from '@domain/domain/types/grades-result.raw.type';
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

  async findByIdRaw(id: number): Promise<GradesResultRaw> {
    const query = `SELECT 
      student."id", 
      student."name", 
      grade."n1", 
      grade."n2", 
      grade."n3", 
      grade."n4", 
      (grade."n1" + grade."n2" + grade."n3" + grade."n4") / 4 AS average 
    FROM 
      public."student" AS student 
      INNER JOIN public."studentGrade" AS grade ON (grade."studentId" = student."id")
      WHERE student."id" = ${id}`;

    const resultQuery: GradesResultRaw[] = await this.query(query);
    if (!resultQuery.length) return null;
    return resultQuery[0];
  }
}
