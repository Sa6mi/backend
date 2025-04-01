import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { fetchUser, getUserForAuth } from "../controllers/usersController.js";
import dotenv from "dotenv";
dotenv.config();

export const JwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
  },
  async (payload, done) => {
    getUserForAuth(payload.Id)
      .then((user) => {
        if (user) return done(null, user);
        return done(null, false);
      })
      .catch((err) => {
        return done(err, false);
      });
  }
);
