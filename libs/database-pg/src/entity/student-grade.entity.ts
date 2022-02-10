import {
  AfterInsert,
  AfterLoad,
  AfterUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StudentEntity } from '.';
import { ColumnBigIntegerTransformer } from '../transform/column-big-integer-transform';

export type StudentGradeEntityRelations = 'student';

@Entity('studentGrade')
export class StudentGradeEntity {
  @Generated()
  @PrimaryColumn({
    type: 'bigint',
    transformer: new ColumnBigIntegerTransformer(),
  })
  id: number;

  @Column('integer')
  n1: number;

  @Column('integer')
  n2: number;

  @Column('integer')
  n3: number;

  @Column('integer')
  n4: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => StudentEntity, (student) => student.id)
  @JoinColumn()
  student: StudentEntity;

  public average: number;

  @AfterInsert()
  @AfterLoad()
  @AfterUpdate()
  averageGrades() {
    this.average = (this.n1 + this.n2 + this.n3 + this.n4) / 4;
  }
}
