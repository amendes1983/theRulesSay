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
    password_confirmation: {
    type: DataTypes.STRING     
    },
    password_digest: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true
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
    password_confirmation: {
    type: DataTypes.STRING
    },
    password_digest: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true
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
    
  });

  var rating = sequelize.define("rating", {
    likes: {
      type: DataTypes.INTEGER
    },
    dislikes: {
      type: DataTypes.INTEGER
    }
    
  });

host.methods.generateHash = function(host_pass) {
    return bcrypt.hashSync(host_pass, bcrypt.genSaltSync(9));
  }

host.methods.validPassword = function(host_pass) {
  return bcrypt.compareSync(host_pass, this.local.host_pass);
}

user.methods.generateHash = function(user_pass) {
    return bcrypt.hashSync(user_pass, bcrypt.genSaltSync(9));
  }

user.methods.validPassword = function(user_pass) {
  return bcrypt.compareSync(user_pass, this.local.user_pass);
}

  return host, user, rating;
};