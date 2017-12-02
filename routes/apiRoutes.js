//require the the friends array and other packages for server to run
var data = require("../data/data.js");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function (app) {
	//retrieve the stored response data
	app.get("/api/data", function (request, response) {
		response.json(data)
	});

	app.post("/api/data", function (request, response) {
		//parse the results of the click handler
		var userResponse = request.body;
		//saves the user response to the server
		data.push(userResponse);
		//return the response to use by sequelize
		response.json(userResponse);
	});
}