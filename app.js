import dotenv from "dotenv";
dotenv.config();

import express from "express";
import "express-async-errors";
import router from "./routes/Router.js";
import passport from "passport";
import { JwtStrategy } from "./Config/passport.js";

const app = express();

const port = process.env.PORT || 3001;
passport.use(JwtStrategy);
app.use(express.json());
app.use("/", router);
app.use((err, req, res, next) => {
  res.status(500).send("Error");
  console.log(err);
});
app.listen(port, () => console.log(`Server Started on port ${port}`));
