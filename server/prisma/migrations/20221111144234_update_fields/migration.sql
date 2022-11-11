/*
  Warnings:

  - Added the required column `href` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Made the column `user_id` on table `Board` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_user_id_fkey";

-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "href" TEXT NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
