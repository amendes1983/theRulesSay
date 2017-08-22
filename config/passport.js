var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/game.js");

module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use("host-signup", new LocalStrategy({
		host_name: "host_name",
		host_pass: "host_pass",
		host_phone: "host_phone",
		address: "address",
		email: "email",
		passReqToCallback: true
	},
	function(req, host_name, password, done) {
		process.nextTick(function() {
			User.findOne({ host: host_name}, function(err, user) {
				if(err)
					return done(err);
				if(user) {
					return done(null, false, req.flash("signupMessage",
						"Username already used"));
				}
			})
		})
	}))
}