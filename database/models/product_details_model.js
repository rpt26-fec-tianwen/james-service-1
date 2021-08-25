module.exports = (sequelize, DataTypes) => {
  const ProductDetails = sequelize.define('product_details', {
    product_details: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    }
  }, {});

  ProductDetails.associate = function (models) {
    ProductDetails.hasOne(models.ProductFeatures, { foreignKey: 'id', onDelete: 'CASCADE' });
    ProductDetails.hasOne(models.ProductDescription, { foreignKey: 'id', onDelete: 'CASCADE' });
    ProductDetails.hasOne(models.MaterialSpecification, { foreignKey: 'id', onDelete: 'CASCADE' });
    ProductDetails.hasOne(models.TechnicalDetails, { foreignKey: 'id', onDelete: 'CASCADE' });
    ProductDetails.hasOne(models.CareInstructions, { foreignKey: 'id', onDelete: 'CASCADE' });
  };

  return ProductDetails;
};