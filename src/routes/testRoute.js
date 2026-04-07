import { Router } from "express";
import { createTest, executeTest } from "../controllers/testController.js";

const router = Router();

router.post("/create-test", createTest);
router.post("/execute-test/:id", executeTest);

export default router;
