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
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.user_pass = bcrypt.hashSync(user.user_pass, salt);
      }
    }
  });
user.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.user_pass)  
};
  return user;
}