import { getAllUsers, getUserById, insertUser } from "../models/userModel.js";

export async function fetchAllUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
}

export async function fetchUser(req, res,next) {
  const id = req.params.id;
  const user = await getUserById(id);
  res.status(200).json(user);
  // throw new Error("sex");
}

export async function CreateUser(req, res) {
  const { userName, Email, imageUrl, passwordHash } = req.body;
  try {
    const user = await insertUser(userName, Email, imageUrl, passwordHash);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Error adding user" });
  }
}
