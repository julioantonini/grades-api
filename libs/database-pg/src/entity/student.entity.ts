import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StudentGradeEntity } from '.';

export type StudentEntityRelations = 'studentGrade';

@Entity('student')
export class StudentEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
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
