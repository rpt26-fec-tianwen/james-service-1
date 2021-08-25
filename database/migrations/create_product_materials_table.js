'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('material_specifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      material: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lining: {
        type: Sequelize.STRING,
        allowNull: true
      },
      filling: {
        type: Sequelize.STRING,
        allowNull: true
      },
      legal_notice: {
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
    await queryInterface.dropTable('material_specifications');
  }
};