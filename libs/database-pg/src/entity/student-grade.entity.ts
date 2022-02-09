import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
