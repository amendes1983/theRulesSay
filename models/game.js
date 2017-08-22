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

  var user = sequelize.define("user", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    validate: {     
      len: [1]
      }
    },
    user_pass: {
      type: DataTypes.STRING,
      allowNull: false,
    validate: {
      len: [5,10]
      }
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
      generateHash: function(user_pass) {
        return bcrypt.hashSync(user_pass, bcrypt.genSaltSync(9));
      }
    },
    instanceMethods: {
      validPassword: function(user_pass) {
        return bcrypt.compareSync(user_pass, this.user_pass);
      }
    }
    
  });

  var rating = sequelize.define("rating", {
    likes: {
      type: DataTypes.INTEGER
    },
    dislikes: {
      type: DataTypes.INTEGER
    }
    
  });

  return host, user, rating;
};