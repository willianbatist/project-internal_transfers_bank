import { DataTypes, Model } from 'sequelize';
import db from '.';

class Accounts extends Model {
  public id!: number;
  public balance: string;
}

Accounts.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  balance: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'accounts',
  timestamps: false,
});

export default Accounts;