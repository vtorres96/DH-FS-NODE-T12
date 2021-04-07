module.exports = (sequelize, DataType) => {
  const Task = sequelize.define('Task', { 
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: DataType.STRING,
    description: DataType.STRING,
    done: DataType.BOOLEAN,
    deleted: DataType.BOOLEAN,
    },{
    tableName: 'tasks',
    timestamps: false
	});
	return Task;
};