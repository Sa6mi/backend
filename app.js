import express from "express";
import userRouter from "./routes/users.js";
import TaskRouter from "./routes/tasks.js";
const app = express();
const port = 3001;
app.use(express.json());
app.use("/users", userRouter);
app.use("/tasks", TaskRouter);
app.use((err, req, res, next) => {
  console.log("sex");
  res.status(500).send("Something broke!");
});

app.listen(port, () => console.log(`Server Started on port ${port}`));
