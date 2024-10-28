require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken')

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  res.status(status).json({
    success: false,
    status,
    message,
  });
};

const authToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Expect "Bearer <token>"
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // Attach the decoded user info to `req.user`
    next();
  });
};

module.exports = { errorHandler, authToken };
