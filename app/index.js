const express = require('express');
const app = express();
const cors = require('cors');
const Router = require('./routes/routes');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT|| 2020;

app.use(express.json())
app.use(Router)

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/view/index.html')
  });

app.listen(
    PORT,
    () => {
        console.log(`API is running on http://localhost:${PORT}`);
    }
)

