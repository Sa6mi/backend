import express from "express";
import "express-async-errors";
import userRouter from "./routes/users.js";
import TaskRouter from "./routes/tasks.js";
const app = express();
const port = 3001;
app.use(express.json());
app.use("/users", userRouter);
app.use("/tasks", TaskRouter);
app.use((err,req,res,next)=>{
  res.status(500).send("Error")
})
app.listen(port, () => console.log(`Server Started on port ${port}`));
