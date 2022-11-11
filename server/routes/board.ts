import express from "express";
import boardController from "../controllers/board";

const router = express.Router();

router.post("/", boardController.createBoard);
router.get("/:id", boardController.getBoard);
router.post("/:boardId/column", boardController.createColumn);
router.post("/:columnId/task", boardController.createTask);
router.post("/:columnId/tasks", boardController.createMultipleTasks);

export default router;
