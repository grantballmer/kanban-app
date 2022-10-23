-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_team_id_fkey";

-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_user_id_fkey";

-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "team_id" DROP NOT NULL,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
