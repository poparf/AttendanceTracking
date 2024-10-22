const express = require('express')
const app = express()
const PORT = 3000;

const mainRoute = require('./routes/mainRoute');

app.use(mainRoute);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
    
})