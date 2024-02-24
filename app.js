const express = require('express');
const app = express();

require('dotenv').config();

const { Op } = require('sequelize');

app.use(express.json())

const routers = require('./routes')

app.use('/', routers);


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
