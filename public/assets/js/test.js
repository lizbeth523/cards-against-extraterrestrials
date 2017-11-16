var Categories = require("./Categories.js");
var hand = [];
var card;

for (var i = 0; i < 10; i++) {
	card = new Categories();
	hand[i] = card.text;
}
console.log(hand.join("\n"));