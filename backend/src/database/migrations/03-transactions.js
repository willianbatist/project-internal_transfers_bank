module.exports = {
    up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
        id:{
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        debitedAccountId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'accounts',
            key: 'id'
          },
          onDelete: 'CASCADE',
        },
        creditedAccountId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'accounts',
            key: 'id'
          },
          onDelete: 'CASCADE',
        },
        value: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: true,
          autoIncrement: true,
        },
    });
  },
  
  down: async (queryInterface) => {
    await queryInterface.dropTable('transactions');
  },
  };