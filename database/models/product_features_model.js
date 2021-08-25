module.exports = (sequelize, DataTypes) => {
  const ProductFeatures = sequelize.define('product_features', {
    featureOne: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    featureTwo: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    featureThree: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    featureFour: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    featureFive: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    featureSix: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    }
  }, {});

  return ProductFeatures;
};

