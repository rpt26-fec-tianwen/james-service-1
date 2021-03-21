'use strict';
const productDetailsData = require('../fakeData/fakeProductDetailsData.js');
const productFeaturesData = require(`../fakeData/fakeProductFeatureData.js`);
const productDescriptionData = require(`../fakeData/fakeProductDescriptionData.js`);
const technicalDetailsData = require(`../fakeData/fakeTechnicalDetailsData.js`);
const materialSpecificationData = require('../fakeData/fakeMaterialSpecificationData');
const careInstructionData = require('../fakeData/fakeCareInstructionsData.js');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product_details', productDetailsData);
    await queryInterface.bulkInsert('product_features', productFeaturesData);
    await queryInterface.bulkInsert('product_descriptions', productDescriptionData);
    await queryInterface.bulkInsert('material_specifications', materialSpecificationData);
    await queryInterface.bulkInsert(`technical_details`, technicalDetailsData);
    await queryInterface.bulkInsert('care_instructions', careInstructionData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product_details', null, {});
    await queryInterface.bulkDelete('product_features', null, {});
    await queryInterface.bulkDelete('product_descriptions', null, {});
    await queryInterface.bulkDelete('material_specifications', null, {});
    await queryInterface.bulkDelete('technical_details', null, {});
    await queryInterface.bulkDelete('care_instructions', null, {});
  }
};
