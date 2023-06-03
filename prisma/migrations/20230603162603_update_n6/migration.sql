/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Empregado` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Empregado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Empregado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `empregado` ADD COLUMN `email` VARCHAR(255) NOT NULL,
    ADD COLUMN `password` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Empregado_email_key` ON `Empregado`(`email`);
