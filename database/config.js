require('dotenv').config()

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  dialect: 'mysql',
  logging: false
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection to the database has been established successfully.');
  }
  catch (error) {
    console.error(error.message);
    process.exit(-1);
  }
};

const model = name => database.models[name];

const ProductDetails = require('./models/product_details_model.js')(sequelize, Sequelize.DataTypes);
const ProductFeatures = require('./models/product_features_model.js')(sequelize, Sequelize.DataTypes);
const ProductDescription = require('./models/product_description_model.js')(sequelize, Sequelize.DataTypes);
const MaterialSpecification = require('./models/material_specification_model.js')(sequelize, Sequelize.DataTypes);
const TechnicalDetails = require('./models/technical_details_model.js')(sequelize, Sequelize.DataTypes);
const CareInstructions = require(`./models/care_instructions_model.js`)(sequelize, Sequelize.DataTypes);

module.exports = (database) = {
  sequelize: sequelize,
  models: { ProductDetails, ProductFeatures, ProductDescription, MaterialSpecification, TechnicalDetails, CareInstructions },
  connect,
  model,
};

