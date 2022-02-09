import {
  AfterLoad,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StudentEntity } from '.';

export type StudentGradeEntityRelations = 'student';

@Entity('studentGrade')
export class StudentGradeEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('integer')
  n1: number;

  @Column('integer')
  n2: number;

  @Column('integer')
  n3: number;

  @Column('integer')
  n4: number;

  @OneToOne(() => StudentEntity, (student) => student.id)
  @JoinColumn()
  student: StudentEntity;

  public average: number;

  @BeforeInsert()
  @AfterLoad()
  averageGrades() {
    this.average = (this.n1 + this.n2 + this.n3 + this.n4) / 4;
  }
}
