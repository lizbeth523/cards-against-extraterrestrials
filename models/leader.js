module.exports = function (sequelize, Datatypes) {
	var Leader = sequelize.define("leader", {
		name: DataTypes.STRING,
		votes: DataTypes.INTEGER
	});
	return Leader;
};