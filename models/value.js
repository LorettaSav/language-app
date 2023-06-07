'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Value extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Value.belongsTo(models.Word)
      Value.belongsTo(models.Field)
    }
  }
  Value.init({
    value: DataTypes.STRING,
    fieldId: DataTypes.INTEGER,
    wordId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Value',
  });
  return Value;
};