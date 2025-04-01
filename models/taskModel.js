import { db } from "../Config/database.js";

export const getAllTasks = async () => {
  return db.any("SELECT * FROM tasks");
};

export const getTasksByUserId = async (userId) => {
  return db.any("SELECT * FROM tasks WHERE user_id = $1", userId);
};
export const insertTask = async (
  userId,
  title,
  description,
  priority,
  status,
  imageUrl,
  date,
  additionalNotes,
  deadline
) => {
  return db.one(
    "INSERT INTO tasks (user_id, title, description, priority, status, image_url,date,additional_notes ,deadline) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)",
    [
      userId,
      title,
      description,
      priority,
      status,
      imageUrl,
      date,
      additionalNotes,
      deadline,
    ]
  );
};
