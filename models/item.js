const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.hasOne(models.Brand, {
        foreignKey: 'id',
        as: 'brand',
      });
      Item.belongsTo(models.Purchase, {
        foreignKey: 'purchaseId',
        as: 'purchases',
      });
    }
  }
  Item.init({
    purchaseId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
