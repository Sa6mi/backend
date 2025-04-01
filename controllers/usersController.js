import { getAllUsers, getUserById, insertUser } from "../models/userModel.js";

export async function fetchAllUsers(req, res) {
  const users = await getAllUsers();
  res.status(200).json(users);
}

export async function fetchUser(req, res) {
  const id = req.params.id;
  const user = await getUserById(id);
  res.status(200).json(user);
  return user;
}

export async function getUserForAuth(id) {
  const user = await getUserById(id);
  return user;
}

export async function CreateUser(req, res) {
  const { userName, Email, imageUrl, passwordHash } = req.body;
  const user = await insertUser(userName, Email, imageUrl, passwordHash);
  res.status(201).json(user);
}
