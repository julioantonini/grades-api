import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StudentGradeEntity } from '.';
import { ColumnBigIntegerTransformer } from '../transform/column-big-integer-transform';

export type StudentEntityRelations = 'studentGrade';

@Entity('student')
export class StudentEntity {
  @PrimaryColumn({
    type: 'bigint',
    transformer: new ColumnBigIntegerTransformer(),
  })
  id: number;

  @Column({ length: 80 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => StudentGradeEntity, (studentGrade) => studentGrade.student)
  studentGrade: StudentGradeEntity;
}
