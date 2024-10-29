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
        res.redirect(`http://localhost:5173?token=${req.user.token}`);
    }
);

module.exports = authRouter;