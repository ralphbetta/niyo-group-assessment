import { Association, DataTypes, Model, Sequelize } from 'sequelize';
import { Account } from './accout.model';

class Task extends Model {
    public id!: number;
    public title!: string;
    public description!: string;

    public static associations: {
        account: Association<Task, Account>;
    };

    public addTask!: (task: Task) => Promise<void>;

}

const initializeTaskModel = (sequelize: Sequelize) => {
    Task.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
    }, {
        sequelize,
        tableName: 'tasks',
        timestamps: true
    });

    return Task;
};

export  { Task, initializeTaskModel };
