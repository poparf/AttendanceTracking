require("dotenv").config();
const express = require("express");
const app = express();
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const AppError = require("./utils/errors/AppError")

const PORT = process.env.PORT || 3001;

const { connectToDatabase } = require("./utils/db");

const mainRoute = require("./routes/mainRoute");
const organizerRouter = require('./routes/organizerRouter');
const errorHandler = require("./utils/middlewares");
const groupRouter = require("./routes/groupRouter");

// TODO: Setup swagger
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());


app.use(mainRoute);
app.use('/api/organizer', organizerRouter);
app.use('/api/group', groupRouter);
app.use("*", (req, res, next) => {
    next(new AppError(`Error 404: Can't find ${req.originalUrl} on this server.`, 404));
})

app.use(errorHandler);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

start();
