var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var land = require('./routes/land');
var stad = require('./routes/stad');

// ändrat 'ramverk' i ursprunglig kod till 'ramverk'
//var app = express();
var ramverk = express();

ramverk.use(logger('dev'));
ramverk.use(express.json());
ramverk.use(express.urlencoded({ extended: false }));
ramverk.use(cookieParser());
ramverk.use(express.static(path.join(__dirname, 'public')));

ramverk.use('/', indexRouter);
ramverk.use('/users', usersRouter);
ramverk.use('/land', land);
ramverk.use('/stad', stad);

module.exports = ramverk;
