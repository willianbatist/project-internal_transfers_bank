import { DataTypes, Model } from 'sequelize';
import db from '.';
import Accounts from './accounts';

class Users extends Model {
  public id!: number;
  public username: string;
  public password: string;
  public accountId: number;
}

Users.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  accountId: DataTypes.INTEGER,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

Users.hasOne(Accounts, { foreignKey: 'accountId' });

export default Users;