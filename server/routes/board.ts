import express from "express";
import boardController from "../controllers/board";

const router = express.Router();

router.post("/", boardController.createBoard);
router.post("/:boardId/column", boardController.createColumn);

export default router;
