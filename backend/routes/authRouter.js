const express = require("express");
const authRouter = express.Router();
const passport = require('passport')
const { authToken } = require("../utils/middlewares")

authRouter.get("/auth/google/userdetails", authToken, async (req, res, next) => {
    try {
        console.log(req.user);
        return res.status(200).send(req.user);
    } catch (error) {
        next(error);
    }
})

authRouter.get("/auth/google",
    passport.authenticate('google', 
        {
            scope: ['profile']
        }
    )
)

authRouter.get("/auth/google/callback",
    passport.authenticate('google', { 
        session: false,
        failureRedirect: 'http://localhost:5173/login-failed'
    }),
    (req, res) => {
        // Make sure the token exists
        if (!req.user || !req.user.token) {
            return res.redirect('http://localhost:5173/login-failed');
        }
        
        // Redirect with the token
        res.redirect(`http://localhost:5173/login?token=${req.user.token}`);
    }
);

module.exports = authRouter;