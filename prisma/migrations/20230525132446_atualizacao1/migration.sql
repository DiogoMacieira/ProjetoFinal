/*
  Warnings:

  - You are about to drop the column `waiterId` on the `mesa` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `mesa` DROP FOREIGN KEY `Mesa_waiterId_fkey`;

-- AlterTable
ALTER TABLE `mesa` DROP COLUMN `waiterId`;
