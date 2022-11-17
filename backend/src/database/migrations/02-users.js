module.exports = {
    up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
        id:{
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        accountId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'accounts',
            key: 'id'
          },
          onDelete: 'CASCADE',
        },
    });
  },
  
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
  };