require("dotenv").config();
const PORT = process.env.PORT || 3001;

const express = require("express");
const app = express();

const { connectToDatabase } = require("./utils/db");

//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const AppError = require("./utils/errors/AppError");

// Routes imported //
const groupRouter = require("./routes/groupRouter");
const organizerRouter = require("./routes/organizerRouter");
const errorHandler = require("./utils/middlewares");
/////////////////////


// TODO: Setup swagger
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

// Routes used by our app
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
