$(document).ready(function () {
	// Initialize Firebase
	var config = {
    	apiKey: "AIzaSyDwsIqLQ2130R93_l1lGndlduTtp69OMpU",
        authDomain: "cards-against-extraterrestials.firebaseapp.com",
        databaseURL: "https://cards-against-extraterrestials.firebaseio.com",
        projectId: "cards-against-extraterrestials",
        storageBucket: "cards-against-extraterrestials.appspot.com",
        messagingSenderId: "1038459487422"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var userName = "";

    var playersRef = database.ref("players");

    var currentPlayers = null;

    $("#login").click(function (event) {

       	console.log("heelo");

        if (currentPlayers < 6) {
                
        }

        userName = $("#userName").val().trim();
        // Creates key based on assigned player number
        playersRef = database.ref("/players/" + userName);

        playersRef.set({
        	points: 'all the points'
        });
    });
});
//when player 1 logs on, initialize the game, creates a game table inside database
//game table will have game name, usernames
//player1 is waiting for addtional players to join
//database.on value on log-in function to check to see if game already exists
//if game exists, run only the function that will add players to the game
//if game does not exist, initialize game, create game table
//have an array of players with playerId that can check if players have joined
