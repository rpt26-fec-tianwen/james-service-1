module.exports = (sequelize, DataTypes) => {
  const ProductDescription = sequelize.define("product_descriptions", {
    product_description: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    article_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    family: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    environmental_information: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    features: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  });
  return ProductDescription;
};
