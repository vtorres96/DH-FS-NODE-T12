module.exports = (sequelize, DataType) => {
  const Task = sequelize.define('Task', { 
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: { 
      type: DataType.STRING,
      allowNull: false, 
    },
    description: DataType.STRING,
    done: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },
    deleted: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },
  },{
    tableName: 'tasks',
    timestamps: false
	})
	return Task
}