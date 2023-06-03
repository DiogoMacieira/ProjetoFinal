/*
  Warnings:

  - The primary key for the `reserva` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `reserva` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `numeroPessoas` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
