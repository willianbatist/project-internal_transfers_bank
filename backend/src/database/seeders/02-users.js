module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('users', [
        {
          username: 'Willian',
        },
      ], {});
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('users', null, {});
    },
  };