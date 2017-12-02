$(document).ready( function() {

	$.get("/api/data", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Card.findAll({}).then( function(dbPost) {
      // res.json(dbPost);
      // console.log(dbPost);
      var response = '<div class="card-block"><h6 class="card-title" id="3">' + dbPost + '</h6></div><div class="game-name"><span class="alien-font">1</span> Cards Against Extraterrestrials</div>';
	  var card = '<div class="card text-center">' + response + '</div>';

	  $(".response-options").append("Hello");
	  console.log("Hello");
    });

  });
});


