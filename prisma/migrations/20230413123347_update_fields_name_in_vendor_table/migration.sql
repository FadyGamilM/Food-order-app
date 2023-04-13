/*
  Warnings:

  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Image` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Vendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Vendor` table. All the data in the column will be lost.
  - The `id` column on the `Vendor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `vendorId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandName` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_vendorId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP CONSTRAINT "Image_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "vendorId",
ADD COLUMN     "vendorId" INTEGER NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_pkey",
DROP COLUMN "name",
ADD COLUMN     "brandName" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ADD CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
