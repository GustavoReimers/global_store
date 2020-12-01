const { Brand, } = require('../../models');

module.exports = {
  findBrand(brandId) {
    return Brand.findByPk(brandId);
  },
};
