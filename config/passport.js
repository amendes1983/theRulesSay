var LocalStrategy = require("passport-local").Strategy;

var db = require("../models/");

module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		db.host.findById(id, function(err, user) {
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
			db.host.findOne({ host: host_name}, function(err, user) {
				if(err)
					return done(err);
				if(user) {
					return done(null, false, req.flash("signupMessage",
						"Username already used"));
				}
			})
		})
	}));

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		db.user.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use("user-signup", new LocalStrategy({
		user_name: "user_name",
		user_pass: "user_pass",
		email: "email",
		passReqToCallback: true
	},
	function(req, host_name, password, done) {
		process.nextTick(function() {
			db.user.findOne({ user: user_name}, function(err, user) {
				if(err)
					return done(err);
				if(user) {
					return done(null, false, req.flash("signupMessage",
						"Username already used"));
				}
			})
		})
	}));	
}