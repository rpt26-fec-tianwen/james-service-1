'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('care_instructions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'product_details', key: 'id' },
      },
      // One to One relationship - https://siddharth-lakhara.medium.com/understanding-sequelize-associations-part-1-one-to-one-1-1-mapping-897ce176caf9
      // productId: {
      //   type: Sequelize.INTEGER,
      //   references: { model: 'product_details', key: 'id' },
      //   autoIncrement: true,
      //   onDelete: 'CASCADE',
      // },
      washing: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dry_cleaning: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bleaching: {
        type: Sequelize.STRING,
        allowNull: true
      },
      drying: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ironing: {
        type: Sequelize.STRING,
        allowNull: true
      },
      additional_care_instructions: {
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
    await queryInterface.dropTable('care_instructions');
  }
};