var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// connecting to the database
// var mysql = require('mysql');
// var connection = mysql.createPool({
//   //properties
//   connectionLimit : 50,
//   host : 'localhost',
//   user: 'root',
//   password: 'softWare!2',
//   database: 'carCheckout'
// });


// app.use('/', function(req,res){
//   //about mysql
//   connection.getConnection(function(err, tempCont){
//     if (!!err){
//       tempCont.release();
//       console.log("error in the query");
//     }
//     else{
//       console.log('query success!');
//       tempCont.query('SELECT * FROM cars', function(error, row, fields){
//         tempCont.release();
//         if (!!err){
//           console.log("error in the query!");
//         }
//         else{
//           res.json(row);
//         }
//       });
//      }
//   });

// })

//allow request from any origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
