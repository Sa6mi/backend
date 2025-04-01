import express from "express";
import TaskRouter from "./tasks.js";
import userRouter from "./users.js";
import { handleRegister } from "../controllers/RegisterController.js";
import { handleLogin } from "../controllers/LoginController.js";
const router = express.Router();
router.use("/tasks", TaskRouter);
router.use("/users", userRouter);
router.post("/register", handleRegister);
router.post("/Login", handleLogin);

export default router;
