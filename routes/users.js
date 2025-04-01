import express from "express";
import { CreateUser, fetchAllUsers,fetchUser} from "../controllers/usersController.js";
import { auth } from "../Config/auth.js";

const userRouter = express.Router();

userRouter.get("/",auth, fetchAllUsers);
userRouter.get("/:id", fetchUser);
userRouter.post("/",CreateUser);
export default userRouter;
