'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trainer.hasMany(models.Pokemon,
        {
          foreignKey: 'trainerId',
          hooks: true
      })
    }
  }
  Trainer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    homeTown: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Trainer',
  });
  return Trainer;
};
