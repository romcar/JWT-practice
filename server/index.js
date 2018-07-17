const bodyParser = require('body-parser');
const express = require('express');
const jsonServer = require('json-server');
const routes = require('./routes/router')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);
app.use('/api', jsonServer.router('db.json'));
// export the express app for testing
module.exports = { app, jsonServer };