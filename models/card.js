module.exports = function(sequelize, DataTypes) {
	var Card = sequelize.define("card", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		card_text: {
			type: DataTypes.STRING,
			validate: {
				notEmpty: true
			}
		},
		// Timestamps
      	createdAt: DataTypes.DATE,
      	updatedAt: DataTypes.DATE
	});

	return Card;
};