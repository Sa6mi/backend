import {
  getAllTasks,
  getTasksByUserId,
  insertTask,
} from "../models/taskModel.js";

export const fetchTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error Fetching Tasks" });
  }
};
export const fetchTasksByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const tasks = await getTasksByUserId(id);
    res.status(200).json(tasks);
  } catch {
    res.status(404).json({ Error: "error fetching user's tasks" });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      userId,
      Title,
      Description,
      Priority,
      Status,
      ImageUrl,
      Date_,
      additionalNotes,
      Deadline,
    } = req.body;
    const task = insertTask(
      userId,
      Title,
      Description,
      Priority,
      Status,
      ImageUrl,
      Date_,
      additionalNotes,
      Deadline
    );
    res.status(201).json(task);
  } catch {
    res.status(500).json({ Error: "Error creating task" });
  }
};
