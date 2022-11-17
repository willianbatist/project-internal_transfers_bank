import { DataTypes, Model } from 'sequelize';
import db from '.';
import Accounts from './accounts';

class Transactions extends Model {
  public id!: number;
  public debitedAccountId!: number;
  public creditedAccountId!: number;
  public value: number;
  public createdAt!: Date;
}

Transactions.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  debitedAccountId: DataTypes.INTEGER,
  creditedAccountId: DataTypes.INTEGER,
  value: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'transactions',
  timestamps: true,
});

Transactions.hasMany(Accounts, { foreignKey: 'debitedAccountId' });
Transactions.hasMany(Accounts, { foreignKey: 'creditedAccountId' });

export default Transactions;