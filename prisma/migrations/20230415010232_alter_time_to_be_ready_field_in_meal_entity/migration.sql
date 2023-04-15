/*
  Warnings:

  - Changed the type of `timeToBeReady` on the `Meal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Meal" DROP COLUMN "timeToBeReady",
ADD COLUMN     "timeToBeReady" INTEGER NOT NULL;
