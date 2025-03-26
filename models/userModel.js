import { db } from "../db/database.js";

export const getAllUsers = async () => {
  return await db.any("Select * from users");
};

export const getUserById = async (UserId) => {
  return await db.one("Select * from users where user_id=$1", UserId);
};

export const insertUser = async (userName, Email, imageUrl, passwordHash) => {
  return await db.one(
    "Insert Into users (username,email,image_url,password_hash) VALUES($1,$2,$3,$4)",
    [userName, Email, imageUrl, passwordHash]
  );
};
