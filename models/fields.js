'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Field extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Field.belongsToMany(models.Word, { through: "Values", foreignKey: "fieldId" })
    }
  }
  Field.init({
    field: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Field',
  });
  return Field;
};