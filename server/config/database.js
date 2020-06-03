var express = require('express');
var Sequelize = require ('sequelize');

module.exports = new Sequelize('carCheckout', 'root', 'softWare!2', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: '0',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
  });


