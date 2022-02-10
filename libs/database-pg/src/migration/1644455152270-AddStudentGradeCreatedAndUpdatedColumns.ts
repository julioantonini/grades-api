import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStudentGradeCreatedAndUpdatedColumns1644455152270
  implements MigrationInterface
{
  name = 'AddStudentGradeCreatedAndUpdatedColumns1644455152270';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP COLUMN "updatedAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP COLUMN "createdAt"`,
    );
  }
}
