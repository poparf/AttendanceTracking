require("dotenv").config();
const PORT = process.env.PORT || 3001;

const passport = require('passport')
const jwt = require('jsonwebtoken')
const express = require("express");
const app = express();
const JWT_SECRET = process.env.JWT_SECRET;

const { connectToDatabase } = require("./utils/db");

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback" // TODO: Asta trb sa faca redirect catre frontend nu backend
  },
  async (accessToken, refreshToken, profile, next) => {

    // Aici creezi user ul
    //console.log(profile);
    await Organizer.findOrCreate({where: { id: profile.id, name: profile.displayName }});
    
    const token = jwt.sign({
      id: profile.id,
      name: profile.displayName
    }, JWT_SECRET,
    {expiresIn: '8h'})
    
    next(null, {token});
  }
));


//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const AppError = require("./utils/errors/AppError");

// Routes imported //
const groupRouter = require("./routes/groupRouter");
const organizerRouter = require("./routes/organizerRouter");
const authRouter = require('./routes/authRouter')
const eventRouter = require("./routes/eventRouter")

const { errorHandler } = require("./utils/middlewares");

const Organizer = require("./models/organizerModel");

/////////////////////


// TODO: Setup swagger
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(passport.initialize())
// Routes used by our app
app.use(authRouter);
app.use("/api/event", eventRouter);
app.use("/api/organizer", organizerRouter);
app.use("/api/group", groupRouter);

app.use("*", (req, res, next) => {
  next(
    new AppError(
      `Error 404: Can't find ${req.originalUrl} on this server.`,
      404
    )
  );
});

app.use(errorHandler);
////////////////////////////

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

start();
