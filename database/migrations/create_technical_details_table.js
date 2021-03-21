'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('technical_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: true
      },
      weight_reference: {
        type: Sequelize.STRING,
        allowNull: true
      },
      model_height: {
        type: Sequelize.STRING,
        allowNull: true
      },
      model_size: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sleeve_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      number_of_pockets: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pockets: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('technical_details');
  }
};