var db = require("../models/");

module.exports = function(app, passport) {

  app.post("/signup/host", function(req, res) {
    db.host.create({
      host_name: req.body.host_name,
      host_pass: req.body.host_pass,
      host_phone: req.body.host_phone,
      address: req.body.address,
      email: req.body.email
    }).then(function(dbHost) {
    res.json(dbHost);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  });


  app.post("/signup/user", function(req, res) {
    db.user.create({
      user_name: req.body.user_name,
      user_pass: req.body.user_pass,
      email: req.body.email
    }).then(function(dbUser) {
    res.json(dbUser);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  });


app.post("/login/host", function(req, res) {
  db.host.findOne({
    where: {
      host_name: req.body.host_name
    }
  }).then(function(user) {
    console.log(user.validPassword(user.host_pass));
    if (!user) {
      res.redirect("/");
    } else if (!user.validPassword(password)) {
      res.redirect("/");
    }
    else {
      req.session.user = user.dataValues;
      res.redirect("/game");
    }
  });
});

app.post("/login/user", function(req, res) {
  db.user.findOne({
    where: {
      user_name: req.body.user_name
    }
  }).then(function(user) {
    console.log(user.validPassword(user.user_pass));
    if (!user) {
      res.redirect("/");
    } else if (!user.validPassword(password)) {
      res.redirect("/");
    }
    else {
      req.session.user = user.dataValues;
      res.redirect("/game");
    }
  });
});
}
