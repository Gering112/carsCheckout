var express = require('express');
var router = express.Router();
var db = require('../config/database');
var userModel = require('../models/User');

router.get('/',(req,res)=>
    userModel.findAll()
    .then(user => {
        console.log(user)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
)

router.post('/register',(req,res) => {
    console.log("body: %j", req.body);
    //res.send(req.body)
    // let data = {
    //     username : 'matty',
    //     firstname : ' matty',
    //     lastname : 'watty',
    //     email: 'matt@rihousing.com',
    //     password: '12345' 
    // }
    //  let {username,firstname,lastname,email,password} = data

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
module.exports = router;

// needed make user table

// search on how to connect the register from angular to node server tmr 
