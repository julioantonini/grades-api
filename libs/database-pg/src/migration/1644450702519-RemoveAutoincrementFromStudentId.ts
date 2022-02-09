import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveAutoincrementFromStudentId1644450702519
  implements MigrationInterface
{
  name = 'RemoveAutoincrementFromStudentId1644450702519';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP CONSTRAINT "FK_cb5eb6c1f9a563c6a5d66423ae9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ALTER COLUMN "id" DROP DEFAULT`,
    );
    await queryRunner.query(`DROP SEQUENCE "student_id_seq"`);
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD CONSTRAINT "FK_cb5eb6c1f9a563c6a5d66423ae9" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "studentGrade" DROP CONSTRAINT "FK_cb5eb6c1f9a563c6a5d66423ae9"`,
    );
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS "student_id_seq" OWNED BY "student"."id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ALTER COLUMN "id" SET DEFAULT nextval('"student_id_seq"')`,
    );
    await queryRunner.query(
      `ALTER TABLE "studentGrade" ADD CONSTRAINT "FK_cb5eb6c1f9a563c6a5d66423ae9" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
