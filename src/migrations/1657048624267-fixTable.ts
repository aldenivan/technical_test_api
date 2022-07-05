import {MigrationInterface, QueryRunner} from "typeorm";

export class fixTable1657048624267 implements MigrationInterface {
    name = 'fixTable1657048624267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "adress"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" character varying NOT NULL DEFAULT '1657048628059'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" character varying NOT NULL DEFAULT '1657048628060'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "address" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedDate" character varying NOT NULL DEFAULT '1657043269011'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdDate" character varying NOT NULL DEFAULT '1657043269010'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "adress" character varying NOT NULL`);
    }

}
