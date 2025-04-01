import passport from "passport";

export const auth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).send("Unauthorized");
    }
    req.user = user;
    return next();
  })(req, res, next);
};
