const express = require('express');
const app = express();
const cors = require('cors');
const Router = require('./routes/routes');

const PORT = process.env.PORT|| 2020;

app.use(express.json())
app.use(Router)

app.listen(
    PORT,
    () => {
        console.log(`API is running on http://localhost:${PORT}`);
    }
)

