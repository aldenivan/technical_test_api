import {MigrationInterface, QueryRunner} from "typeorm";

export class initialCommit1657043265539 implements MigrationInterface {
    name = 'initialCommit1657043265539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createDate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updateDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdDate" character varying NOT NULL DEFAULT '1657043269010'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedDate" character varying NOT NULL DEFAULT '1657043269011'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updateDate" character varying NOT NULL DEFAULT '1657042692925'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createDate" character varying NOT NULL DEFAULT '1657042692924'`);
    }

}
