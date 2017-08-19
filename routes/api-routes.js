var db = require("../models/");

  app.post("/signup/create", function(req, res) {
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