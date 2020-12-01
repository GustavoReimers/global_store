module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Brands', [
      {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: 'brand1',
        location: 'russia',
      },
      {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: 'brand2',
        location: 'USA',
      },
      {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logo: 'brand3',
        location: 'Israel',
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Brands', null, {});
  },
};
