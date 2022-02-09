import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveStudentGradeCreatedAndUpdatedColumns1644449483694
  implements MigrationInterface
{
  name = 'RemoveStudentGradeCreatedAndUpdatedColumns1644449483694';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP COLUMN "createdAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP COLUMN "updatedAt"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }
}
