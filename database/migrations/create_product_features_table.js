'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_features', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      featureOne: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      featureTwo: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      featureThree: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      featureFour: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      featureFive: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      featureSix: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
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
    await queryInterface.dropTable('product_features');
  }
};