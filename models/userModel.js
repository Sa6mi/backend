import { db } from "../Config/database.js";

export const getAllUsers = async () => {
  return await db.any("Select * from users");
};

export const getUserById = async (UserId) => {
  return await db.one("Select * from users where user_id=$1", UserId);
};

export const getUserByEmail = async (Email) => {
  return await db.oneOrNone("Select * from users where email=$1", Email);
};

export const insertUser = async (
  firstName,
  lastName,
  Email,
  imageUrl,
  passwordHash
) => {
  return await db.none(
    "Insert Into users (first_name,last_name,email,image_url,password_hash) VALUES($1,$2,$3,$4,$5)",
    [firstName, lastName, Email, imageUrl, passwordHash]
  );
};
