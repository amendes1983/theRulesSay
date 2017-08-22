module.exports = function(sequelize, DataTypes) {
  var rating = sequelize.define("rating", {
    likes: {
      type: DataTypes.INTEGER
    },
    dislikes: {
      type: DataTypes.INTEGER
    }
    
  });
  return rating;
}