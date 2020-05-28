var express = require('express');
var router = express.Router();


// get request return info
var data = require("/Users/geringdong/carCheckout/server/carData/car.json")
// var data = 
//   {
//     "id": 38086,
//     "first_name": "Gary",
//     "last_name": "Coleman",
//     "date": "5/23/2020, 1:27:13 PM",
//     "photo": "http://srcimg.com/100/150",
//     "married": true
//   };

  
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json(data);
});

router.get('/login', function(req, res, next) {
  res.send('login success');
});
module.exports = router;
