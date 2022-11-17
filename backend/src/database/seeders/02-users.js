module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('users', [
        {
          username: 'Willian',
          password: 'anjsdhnausdad44488484',
          accountId: 1,
        },
      ], {});
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('users', null, {});
    },
  };