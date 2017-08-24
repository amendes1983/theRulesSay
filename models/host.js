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
      validPassword: function(host_pass, passwd, done, user) {
          bcrypt.compare(host_pass, passwd, function(err, isMatch) {
            if (err) console.log(err);
            if (isMatch) {
              return done(null, user)
            }
            else {
              return done(null, false)
            }
          });       
      }
    }    
  },
  {
      dialect: "mysql"
    }
);
host.hook("beforeCreate", function(user, fn) {
  var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    return salt
  });
  bcrypt.hash(user.host_pass, salt, null, function(err, hash) {
    if(err) return next(err);
    user.host_pass = hash;
    return fn(null, user)
  });
})
  return host;
};