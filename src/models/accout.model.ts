import { DataTypes, Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

class Account extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

    public async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

    public async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

const initializeAccountModel = (sequelize: Sequelize) => {
    Account.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
    }, {
        sequelize,
        tableName: 'accounts',
        timestamps: true
    });

    // HOOKS

    Account.beforeCreate(async (account, options) => {
        const hashedPassword = await bcrypt.hash(account.password, 10);
        account.password = hashedPassword;
      });
    
      Account.prototype.comparePassword = async function (password) {
        return bcrypt.compare(password, this.password);
      };
    
      Account.prototype.hashPassword = async function (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
      };
    return Account;
};

export default { Account, initializeAccountModel };
