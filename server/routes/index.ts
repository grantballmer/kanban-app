import express from "express";
import authRouter from "./auth";
import boardRouter from "./board";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/board", boardRouter);

export default router;
