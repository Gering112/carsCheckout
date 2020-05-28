var express = require('express');
var sequelize = require ('sequelize');

//constructor function
var connection = new sequelize('carCheckout','root','softWare!2',{
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
})

var User = connection.define('Random',{
    Name: sequelize.STRING,
    Description: sequelize.TEXT
})
// sequelizing
connection.
sync({
    logging: console.log
})
    .then(()=> {
        console.log("Successfully connected to database");
        
    })
    .catch(err => {
        console.error("unable to connect to database",err);
    })

