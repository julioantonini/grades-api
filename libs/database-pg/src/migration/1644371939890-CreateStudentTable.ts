import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentTable1644371939890 implements MigrationInterface {
  name = 'CreateStudentTable1644371939890';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "student" ("id" BIGSERIAL NOT NULL, "name" character varying(80) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "student"`);
  }
}
