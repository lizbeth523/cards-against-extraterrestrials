//need this to get the file path for the html files
var path = require ("path");

module.exports = function(app) {
	//display the home page when users connect to website
	app.get("/", function(request, response) {
	  response.sendFile(path.join(__dirname, "../public/index.html"));
	});
	//display the questionaire when user wants to take the quiz
	app.get("/game", function(request, response) {
	  response.sendFile(path.join(__dirname, "../public/game.html"));
	});
	//display the options for which to vote
	app.get("/vote", function(request, response) {
	  response.sendFile(path.join(__dirname, "../public/vote.html"));
	});
}