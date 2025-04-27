/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `bikes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "bikes_customerId_key" ON "bikes"("customerId");
