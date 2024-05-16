import { db_host, db_port, db_name, db_user, db_password } from '../config/environment.config';
import { Sequelize } from 'sequelize';
import AccountModel from './accout.model';
import TaskModel from './tesk.model';
import Relationships from './database.relationship';

const sequelize = new Sequelize({
  database: db_name || '',
  username: db_user || '',
  password: db_password || '',
  host: db_host || 'localhost',
  port: db_port || 8080,
  dialect: 'postgres',
  dialectOptions: {},
  logging: false
});


const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Account = db.account = AccountModel.initializeAccountModel(sequelize);
const Task = db.task = TaskModel.initializeTaskModel(sequelize);


Relationships.group(Account, Task);


export { db, Account, Task };
