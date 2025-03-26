import express from "express"
import { createTask, fetchTasks, fetchTasksByUserId } from "../controllers/tasksController.js";

const TaskRouter = express.Router();

TaskRouter.get("/",fetchTasks);
TaskRouter.get("/:id",fetchTasksByUserId);
TaskRouter.post("/",createTask);
export default TaskRouter