'use strict';

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var models = require('./models');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/airpi', { useMongoClient: true });

var app = express();
var port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);

console.log('Influencair API listening on: ' + port);
