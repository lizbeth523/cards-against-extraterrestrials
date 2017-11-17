module.exports = function (sequelize, DataTypes) {
	var Leader = sequelize.define("leader", {
		name: DataTypes.STRING,
		votes: DataTypes.INTEGER
	});
	return Leader;
};