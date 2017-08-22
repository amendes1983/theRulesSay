var db = require("../models/");

module.exports = function(app, passport) {

  app.post("/signup", passport.authenticate("host-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
  }));

  app.post("/signup", function(req, res) {
    db.user.create({
      user_name: req.body.host_name,
      user_pass: req.body.host_pass,
      email: req.body.email
    }).then(function(dbUser) {
    res.json(dbUser);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  });

  
};