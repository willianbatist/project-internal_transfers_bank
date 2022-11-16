import { Options } from 'sequelize';

const config: Options = {
  username: 'postgres',
  password: '123456',
  database: 'todo-list',
  host: 'db',
  port: 5432,
  dialect: 'postgres',
  define: {
    timestamps: true,
  },
  logging: false,
};

module.exports = config;