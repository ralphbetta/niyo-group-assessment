import { Account, Task } from './database.connection';

class Relationships {

    static group( AccountModel: typeof Account, TaskModel: typeof Task): void {
        AccountModel.hasMany(TaskModel);
        TaskModel.belongsTo(AccountModel);
    }
}

export default Relationships;