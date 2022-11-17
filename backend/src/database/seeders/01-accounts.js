module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('accounts', [
      {
        balance: 'Admin',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};