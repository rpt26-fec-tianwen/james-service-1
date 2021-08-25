module.exports = (sequelize, DataTypes) => {
  const CareInstructions = sequelize.define('care_instructions', {
    washing: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    dry_cleaning: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    bleaching: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    drying: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    ironing: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    additional_care_instructions: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  }, {});

  return CareInstructions;
};