//var db = require("../models");
//var path = require("path");

module.exports = function(app) {
  // Load index page
//   app.get("/", function(req, res) {
//     db.users.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.users
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(dbExample) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  // });

  // Load example page and pass in an example by id
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
