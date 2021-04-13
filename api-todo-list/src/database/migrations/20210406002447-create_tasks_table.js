'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
		    allowNull: false,
      },
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      done: Sequelize.BOOLEAN,
	    deleted: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks')
  }
};
