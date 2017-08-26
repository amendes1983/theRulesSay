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
},  {    
    hooks: {
      beforeCreate: (host) => {
        const salt = bcrypt.genSaltSync();
        host.host_pass = bcrypt.hashSync(host.host_pass, salt);
      }
    }
  });

host.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.host_pass)  
};
  host.associate = function(models) {
    host.hasMany(models.rating, {
      onDelete: "cascade"
    });
  };
  return host;
};