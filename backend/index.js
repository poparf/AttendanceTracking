require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;

const mainRoute = require('./routes/mainRoute');

app.use(mainRoute);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})