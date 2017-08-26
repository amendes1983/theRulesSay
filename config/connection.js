var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
var	sequelize = new Sequelize(process.env.JAWSDB_URL, {
		dialect: "mysql",
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	})
}

else {
var	sequelize = new Sequelize("therulessay", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
};

module.exports = sequelize;