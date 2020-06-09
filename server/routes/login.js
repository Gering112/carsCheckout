var express = require('express');
var router = express.Router();
var db = require('../config/database');
var userModel = require('../models/User');

router.get('/',(req,res)=>
    userModel.findAll()
    .then(user => {
        res.json(user);
        console.log(user);
        
    })
    .catch(err => console.log(err))
);

router.post('/register',(req,res) => {
    console.log("body: %j", req.body);
    let {username,firstname,lastname,email,password} = req.body;
    // //inserting into the table
    
    userModel.create({
        username,
        firstname,
        lastname,
        email,
        password
    })
    .then(user => res.json(user))
    .catch(err => res.sendStatus(404).json(err));
})


router.post('/userLogin', (req, res) => {
  let {username,password} = req.body

  userModel.findOne({where:{username:username, password:password}
  })
  .then(user => res.json(user))
  .catch(err => res.sendStatus(404).json.err)
})


module.exports = router;
