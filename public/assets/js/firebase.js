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
    $("#login").click(function (event) {
        //sets player's username based on their input
        userName = $("#userName").val().trim();
        // Creates key based on assigned player number
        playersRef = database.ref("/players/" + userName);
        //updates firebase when a player joins
        playersRef.set({
            gameJoined: "yes"
        });
    });
    playersRef.on("value", function (snapshot) {
        console.log(snapshot.numChildren());
        if (snapshot.numChildren() === 5) {
            console.log("game starting");
        }
        var playerOneExists = snapshot.child().exists();
        var playerOneData = snapshot.child("1").val();
        console.log(playerOneExists);
        console.log(playerOneData);
    });
    playersRef.onDisconnect().remove();
});