/*
  Warnings:

  - You are about to drop the column `attributeId` on the `Hero` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Hero` table. All the data in the column will be lost.
  - You are about to drop the `Attribute` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `data` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_attributeId_fkey";

-- DropIndex
DROP INDEX "Hero_attributeId_key";

-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "attributeId",
DROP COLUMN "name",
ADD COLUMN     "data" JSONB NOT NULL;

-- DropTable
DROP TABLE "Attribute";
