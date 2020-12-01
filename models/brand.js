const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.belongsTo(models.Item, {
        foreignKey: 'id',
        as: 'item',
      });
    }
  }
  Brand.init({
    logo: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};
