import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentRelations1644372306385 implements MigrationInterface {
  name = 'CreateStudentRelations1644372306385';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD "studentId" bigint`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD CONSTRAINT "UQ_cb5eb6c1f9a563c6a5d66423ae9" UNIQUE ("studentId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD CONSTRAINT "FK_cb5eb6c1f9a563c6a5d66423ae9" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP CONSTRAINT "FK_cb5eb6c1f9a563c6a5d66423ae9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP CONSTRAINT "UQ_cb5eb6c1f9a563c6a5d66423ae9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP COLUMN "studentId"`,
    );
  }
}
