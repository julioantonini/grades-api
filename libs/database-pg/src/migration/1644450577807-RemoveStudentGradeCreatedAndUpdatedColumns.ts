import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveStudentGradeCreatedAndUpdatedColumns1644450577807
  implements MigrationInterface
{
  name = 'RemoveStudentGradeCreatedAndUpdatedColumns1644450577807';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP COLUMN "updatedAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP COLUMN "createdAt"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }
}
