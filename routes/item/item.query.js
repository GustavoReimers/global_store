const { Op, } = require('sequelize');
const { Item, } = require('../../models');

module.exports = {

  findAllItem() {
    return Item.findAll({
      order:
      ['createdAt'],
    });
  },

  findItem(brandId) {
    return Item.findByPk(brandId);
  },

  filterItems(brands) {
    return Item.findAll({
      where: {
        brandId: {
          [Op.in]: brands,
        },
      },
    });
  },

  findPurchase(id) {
    return Item.findByPk(id);
  },

  addItem(name, brandId, price, purchaseId, fileLink) {
    return Item.create({
      name,
      brandId,
      price,
      logo: fileLink,
      purchaseId,
    });
  },

  findByPkItem(id) {
    return Item.findByPk(id);
  },

  updateItem(item, name, price, fileLink) {
    return item.update({
      name,
      price,
      logo: fileLink,
    });
  },

  destroyItem(item) {
    return item.destroy();
  },
};
