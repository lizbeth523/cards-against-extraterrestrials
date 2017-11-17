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

