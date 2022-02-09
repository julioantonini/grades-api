import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
