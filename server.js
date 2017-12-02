var express = require("express");
var bodyParser = require("body-parser");
var controller = require("./controllers/controller.js");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./controllers/controller.js")(app);

//app.get("/", function(req, res) {
//    db.leader.findAll({}).then( function(response) {
      // var hbsObject = {
      //   leaders: response
      // };
      // console.log(hbsObject);
      // res.render("index", hbsObject);
      //res.redirect("/");
    //});
//});

//app.use("/", controller);
//requires the routing files for that the app will be using
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});