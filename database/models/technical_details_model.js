module.exports = (sequelize, DataTypes) => {
  const TechnicalDetails = sequelize.define('technical_details', {
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    weight_reference: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    model_height: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    model_size: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    sleeve_type: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    number_of_pockets: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    pockets: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
  });
  return TechnicalDetails;
}