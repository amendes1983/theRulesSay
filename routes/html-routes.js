var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/view.html"));
  });

  app.get("/games", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/games.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/signup.html"));
  });

  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/user.html"));
  });

  app.get("/hosts", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/host.html"));
  });

  app.get("/:game", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/game.html"));
  });

};
