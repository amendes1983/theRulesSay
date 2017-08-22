module.exports = function(sequelize, DataTypes) {
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
  return user;
}