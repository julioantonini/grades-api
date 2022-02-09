import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentGradeTable1644372116491
  implements MigrationInterface
{
  name = 'CreateStudentGradeTable1644372116491';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "studentGrade" ("id" BIGSERIAL NOT NULL, "n1" integer NOT NULL, "n2" integer NOT NULL, "n3" integer NOT NULL, "n4" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b0cdf933accae64ad8a52ae4314" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "studentGrade"`);
  }
}
