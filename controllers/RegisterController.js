import bcrypt from "bcrypt";
import { getUserByEmail } from "../models/userModel.js";
import { insertUser } from "../models/userModel.js";
export const handleRegister = async (req, res) => {
  const { firstName, lastName, Email, imageUrl, Password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(Password, salt);
  const duplicate = await getUserByEmail(Email);
  if (!duplicate) {
    const user = await insertUser(
      firstName,
      lastName,
      Email,
      imageUrl,
      passwordHash
    );
    res.status(201).json(user);
    console.log("created User");
  } else {
    res.status(403).send("User Already Exists");
  }
};
