//$(document).ready(function () {
//	// Initialize Firebase
//	var config = {
//    	apiKey: "AIzaSyDwsIqLQ2130R93_l1lGndlduTtp69OMpU",
//        authDomain: "cards-against-extraterrestials.firebaseapp.com",
//        databaseURL: "https://cards-against-extraterrestials.firebaseio.com",
//        projectId: "cards-against-extraterrestials",
//        storageBucket: "cards-against-extraterrestials.appspot.com",
//        messagingSenderId: "1038459487422"
//    };
//    firebase.initializeApp(config);//

//    var database = firebase.database();//

//    var userName = "";//

//    var playersRef = database.ref("/players");//

//    var connectionsRef = database.ref("/connections");//

//    var trigger = true;//

//    $("#login").click(function (event) {//

//       	//sets player's username based on their input
//       	userName = $("#userName").val().trim();
//	    // Creates key based on assigned player number
//	    playersRef = database.ref("/players/" + userName);
//	    //updates firebase when a player joins
//	    playersRef.set({
//	    	gameJoined: "yes"
//	    });
//    });//

//    playersRef.on("child_added", function (snapshot) {
//    	console.log(snapshot.numChildren());//

//    	if (snapshot.numChildren() === 1) {
//    		var con = playersRef.set(true);//

//    		con.onDisconnect().remove();
//    	}//

//    	if (snapshot.numChildren() === 5) {
//    		console.log("game starting");//
//

//    	}//

//    	var playerOneExists = snapshot.child().exists();//

//    	var playerOneData = snapshot.child("1").val();//

//    	console.log(playerOneExists);//

//    	console.log(playerOneData);
//    });//

//    playersRef.onDisconnect().remove();
//});
//when player 1 logs on, initialize the game, creates a game table inside database
//game table will have game name, usernames
//player1 is waiting for addtional players to join
//database.on value on log-in function to check to see if game already exists
//if game exists, run only the function that will add players to the game
//if game does not exist, initialize game, create game table
//have an array of players with playerId that can check if players have joined
