import express from "express";
import authController from "../controllers/auth";

const router = express.Router();

router.get("/test", authController.test);
router.get("/different", authController.different);

export default router;
