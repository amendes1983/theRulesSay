var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var flash = require("connect-flash");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("./public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'therulessay',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true}
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app, passport);
require("./routes/api-routes.js")(app, passport);
require("./config/passport.js")(passport);
var db = require("./models/");

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
	});
});