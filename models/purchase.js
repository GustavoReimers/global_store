const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    static associate(models) {
      Purchase.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Purchase.hasMany(models.Item, {
        foreignKey: 'id',
        as: 'items',
      });
    }
  }
  Purchase.init({
    userId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};
