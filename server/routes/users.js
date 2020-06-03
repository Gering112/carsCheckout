var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

  
// /* GET users listing. */
var data = require("/Users/geringdong/carCheckout/server/carData/car.json")
router.get('/', function(req, res, next) {
  res.json(data);
});

// router.get('/login', function(req, res, next) {
//   res.send('login success');
// });
module.exports = router;
