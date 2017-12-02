var db = require("../models");

var express = require("express");

var router = express.Router();

//// Create our burger routes and set up logic within those routes where required.
router.post("/api/data", function(req, res) {
	db.card.create({
		card_text: req.body.card_text
	}).then( function(response) {
		res.redirect("/");
	}).catch( function(error) {
		res.json(error);
	});
});

//router.put("/api/update", function(req, res) {
//	
//	db.leader.update({
//		// devoured: true
//		// UPDATE TO RELEVANT INFO
//	}, {
//		where: {
//			id: req.body.leader_id
//		}
//	}).then( function(response) {
//		res.redirect("/");
//	}).catch( function(error) {
//		res.json(error);
//	});//

//});

module.exports = router;

// module.exports = function (app) {

// };