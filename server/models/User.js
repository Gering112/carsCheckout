//'use strict';
var Sequelize = require('sequelize');
var db = require('../config/database');


var User = db.define('user',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(20)
  },
  firstname: {
    type: Sequelize.STRING(20)
  },
  lastname: {
    type: Sequelize.STRING(20)
  },
  email: {
    type: Sequelize.STRING(255)
  },
  password: {
    type: Sequelize.STRING(512)
  }

})

module.exports = User