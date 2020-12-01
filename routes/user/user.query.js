const { User, } = require('../../models');

module.exports = {
  findUser(userId) {
    return User.findByPk(userId);
  },
};
