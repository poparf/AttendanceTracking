require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

const { connectToDatabase } = require("./db/db");

const mainRoute = require("./routes/mainRoute");

app.use(express.json());

app.use(mainRoute);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

start();
