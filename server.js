var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("./public"));


app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
var db = require("./models/");

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
	});
});