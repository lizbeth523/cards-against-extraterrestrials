
//// Initialize Firebase
//var config = {
//  apiKey: "AIzaSyDwsIqLQ2130R93_l1lGndlduTtp69OMpU",
//  authDomain: "cards-against-extraterrestials.firebaseapp.com",
//  databaseURL: "https://cards-against-extraterrestials.firebaseio.com",
//  projectId: "cards-against-extraterrestials",
//  storageBucket: "cards-against-extraterrestials.appspot.com",
//  messagingSenderId: "1038459487422"
//};
//firebase.initializeApp(config);//

//var database = firebase.database();//

//var userName = "";//

//$("#login").on("click", function (event) {
//	event.preventDefault();//

//	userName = $("#userName").val().trim();//

//	console.log(userName);//

//	database.ref().push({
//		userName: userName
//	});
//});

//var players = database.ref('/players');

//const btnLogin = $("#login");

//btnLogin.on("click",function(){
    //firebase.auth().signInAnonymously();
    
//});



//firebase.auth().onAuthStateChanged(firebaseUser=>{
//	console.log(firebaseUser);
//	console.log(firebaseUser.uid);
//	players.push(firebaseUser.uid);
//});