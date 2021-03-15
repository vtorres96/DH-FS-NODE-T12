module.exports = (sequelize, DataType) => {
	const User = sequelize.define(
		'User', 
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataType.STRING,
		email: DataType.STRING,
		password: DataType.STRING,
	},{
    tableName: 'users',
	});
	return User;
};