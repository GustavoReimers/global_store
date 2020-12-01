const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Purchase, {
        foreignKey: 'id',
        as: 'purchases',
      });
    }
  }
  User.init({
    userName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
