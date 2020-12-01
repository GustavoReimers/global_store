const { Purchase, } = require('../../models');

module.exports = {

  findAllPurchases() {
    return Purchase.findAll({
      order:
      ['createdAt'],
    });
  },

  addPurchases(category, amount, userId) {
    return Purchase.create({
      category,
      amount,
      userId,
    });
  },

  findByPkPurchases(id) {
    return Purchase.findByPk(id);
  },

  updatePurchases(purchases, category, amount) {
    return purchases.update({
      category,
      amount,
    });
  },

  destroyPurchases(purchases) {
    return purchases.destroy();
  },
};
