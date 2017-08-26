module.exports = function(sequelize, DataTypes) {
  var rating = sequelize.define("rating", {
    likes: {
      type: DataTypes.INTEGER
    },
    dislikes: {
      type: DataTypes.INTEGER
    }
    
  });
rating.associate = function(models) {
	rating.belongsTo(models.host, {
		foreignKey: {
			allowNull: false
		}
	});
}
  return rating;

};