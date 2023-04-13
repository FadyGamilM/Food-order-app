/*
  Warnings:

  - The values [Snacks,Desserts,Fruits,Vegetables,Meat] on the enum `FoodType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FoodType_new" AS ENUM ('SNACKS', 'DESSERTS', 'FRUITS', 'VEGETABLES', 'MEAT');
ALTER TABLE "Vendor" ALTER COLUMN "foodType" TYPE "FoodType_new"[] USING ("foodType"::text::"FoodType_new"[]);
ALTER TYPE "FoodType" RENAME TO "FoodType_old";
ALTER TYPE "FoodType_new" RENAME TO "FoodType";
DROP TYPE "FoodType_old";
COMMIT;
