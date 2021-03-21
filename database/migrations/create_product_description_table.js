'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_descriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_description: {
        type: Sequelize.STRING(400),
        allowNull: true
      },
      article_number: {
        type: Sequelize.STRING,
        allowNull: true
      },
      activity: {
        type: Sequelize.STRING,
        allowNull: true
      },
      family: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true
      },
      environmental_information: {
        type: Sequelize.STRING,
        allowNull: true
      },
      features: {
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
    await queryInterface.dropTable('product_descriptions');
  }
};