module.exports = (sequelize, DataType) => {
	const Recipe = sequelize.define(
		'Recipe', 
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataType.STRING,
		email: DataType.STRING,
		message: DataType.STRING,
	},{
    tableName: 'recipes',
	});
	return Recipe;
};