/*
  Warnings:

  - You are about to drop the column `name` on the `bikes` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `bikes` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `bikes` table. All the data in the column will be lost.
  - Added the required column `Brand` to the `bikes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Model` to the `bikes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Year` to the `bikes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bikes" DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "type",
ADD COLUMN     "Brand" TEXT NOT NULL,
ADD COLUMN     "Model" TEXT NOT NULL,
ADD COLUMN     "Year" INTEGER NOT NULL;
