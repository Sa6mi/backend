import express from "express";
import { CreateUser, fetchAllUsers,fetchUser} from "../controllers/usersController.js";

const userRouter = express.Router();

userRouter.get("/", fetchAllUsers);
userRouter.get("/:id", fetchUser);
userRouter.post("/",CreateUser);
export default userRouter;
