var LocalStrategy = require("passport-local").Strategy;

var db = require("../models/");

module.exports = function(passport) {

	passport.serializeUser(function(host, done) {
		done(null, host);
	});

	passport.deserializeUser(function(host, done) {
		db.host.find({where: {id: host.id}}).success(function(host) {
			done(null, host);
		}).err(function(err) {
			done(err, null)
		});
	});

	passport.use(new LocalStrategy(
		function(username, password, done) {
			db.Host.find({where: {host_name: username}}).success(function(host) {
				passwd = host ? host.password : ""
				isMatch = db.host.validPassword(host_pass, passwd, done, host)
			});
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
	function(req, user_name, user_pass, done) {
		process.nextTick(function() {
			db.user.findOne({ users: user_name}, function(err, user) {
				if(err)
					return done(err);
				if(user) {
					return done(null, false, req.flash("signupMessage",
						"Username already used"));
				}
				else {
					var newUser = new db.user();

					newUser.users.user_name = user_name;
					newUser.users.user_pass = newUser.generateHash(user_pass);

					newUser.save(function(err) {
						if (err)
							throw err;
						return done(null, newUser);
					})
				}
			})
		})
	}));	
}