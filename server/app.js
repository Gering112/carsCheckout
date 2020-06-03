var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
// body parser
app.use(bodyParser.urlencoded({extended:false}))


// testing DB connection
var db = require('./config/database.js');

db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.',err);
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


app.use('/', indexRouter);
app.use('/users', usersRouter);

//route for login model
app.use('/login', require('./routes/login'))

module.exports = app;
