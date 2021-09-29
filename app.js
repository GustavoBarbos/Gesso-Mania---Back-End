require('dotenv').config()
require('./config/db.config')

const UserRoute = require('./routes/signup.routes')

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

app.use('/', UserRoute)

app.listen(process.env.PORT, () => console.log("Começou gesseiro"))