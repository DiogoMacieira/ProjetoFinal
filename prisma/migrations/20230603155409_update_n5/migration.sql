/*
  Warnings:

  - The primary key for the `cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `empregado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `menu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `mesa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `pedido` DROP FOREIGN KEY `Pedido_mesaId_fkey`;

-- DropForeignKey
ALTER TABLE `pedido` DROP FOREIGN KEY `Pedido_waiterId_fkey`;

-- DropForeignKey
ALTER TABLE `produtos` DROP FOREIGN KEY `Produtos_menuId_fkey`;

-- AlterTable
ALTER TABLE `cliente` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `empregado` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `menu` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `mesa` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pedido` MODIFY `mesaId` VARCHAR(191) NOT NULL,
    MODIFY `waiterId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `produtos` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `menuId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `Menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_mesaId_fkey` FOREIGN KEY (`mesaId`) REFERENCES `Mesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_waiterId_fkey` FOREIGN KEY (`waiterId`) REFERENCES `Empregado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
