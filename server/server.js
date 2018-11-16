const express = require('express');
const app = express();
const bodyParser = express.json();
const cors = require('cors');
const conf = require('./config.js');
const router = require('./router.js');
const db = require('./models');

app.use(cors());
app.use(bodyParser);
app.use(express.static(conf.clientPath));
app.use(router);

module.exports = app;
