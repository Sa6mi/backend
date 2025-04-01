import bcrypt from "bcrypt";
import { getUserByEmail } from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const handleLogin = async (req, res) => {
  const { Email, Password } = req.body;
  const user = await getUserByEmail(Email);
  if (!user) {
    return res.status(401).send("Wrong email");
  }
  const match = await bcrypt.compare(Password, user.password_hash);
  if (match) {
    const token = jwt.sign(
      {
        Id: user.user_id,
        firstName: user.first_name,
        lastName: user.last_name,
        Email: user.email,
        imageUrl: user.image_url,
      },
      process.env.SECRET,
      { expiresIn: "14d" }
    );
    const resUser = { ...user, token };
    delete resUser.password_hash;
    res.status(200).json(resUser);
  } else {
    res.status(401).send("Wrong password");
  }
};
