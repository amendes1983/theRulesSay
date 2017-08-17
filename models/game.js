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
      allowNull: false
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
      allowNull: false
    }
    
  });

  var user = sequelize.define("rating", {
    likes: {
      type: DataTypes.INTEGER
    },
    dislikes: {
      type: DataTypes.INTEGER
    }
    
  });

  return host, user, rating;
};