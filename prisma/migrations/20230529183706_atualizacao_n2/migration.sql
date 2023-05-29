/*
  Warnings:

  - You are about to drop the column `userId` on the `reserva` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `Reserva` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Reserva` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reserva` DROP FOREIGN KEY `Reserva_userId_fkey`;

-- AlterTable
ALTER TABLE `reserva` DROP COLUMN `userId`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;
