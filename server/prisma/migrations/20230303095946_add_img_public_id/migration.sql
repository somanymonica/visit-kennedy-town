/*
  Warnings:

  - Added the required column `image_public_id` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "image_public_id" VARCHAR(255) NOT NULL;
