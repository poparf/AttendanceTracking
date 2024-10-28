const express = require("express");
const authRouter = express.Router();
const passport = require('passport')

authRouter.get("/auth/google",
    passport.authenticate('google', 
        {
            scope: ['profile']
        }
    )
)

authRouter.get("/auth/google/callback",
    passport.authenticate('google', { session:false }), (req, res) => {
    res.redirect(`http://localhost:5173?token=${req.user.token}`);
  });

module.exports = authRouter;