"use strict";

var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {

  var host = sequelize.define("host", {
    host_name: {
      type: DataTypes.STRING,
      allowNull: false,
    validate: {     
      len: [1]
      }
    },
    host_pass: {
      type: DataTypes.STRING,
      allowNull: false,
    validate: {
      len: [5,16]
      }
    },  
    host_phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    validate: {
      len: [10,10]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
              isEmail: true,
              notEmpty: true
        }
      }
    },
    {
    classMethods: {
      generateHash: function(host_pass) {
        return bcrypt.hashSync(host_pass, bcrypt.genSaltSync(9));
      }
    },
    instanceMethods: {
      validPassword: function(host_pass) {
        return bcrypt.compareSync(host_pass, this.host_pass);    
      }
    }
  });

  return host;
};