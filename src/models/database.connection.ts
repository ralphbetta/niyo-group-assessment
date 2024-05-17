import { db_host, db_port, db_name, db_user, db_password } from '../config/environment.config';
import { Sequelize } from 'sequelize';
import {Account, initializeAccountModel} from './accout.model';
import {Task, initializeTaskModel} from './task.model';
import Relationships from './database.relationship';


console.log(db_name, db_user, db_password, db_host, db_port);


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

const AccountModel = db.account = initializeAccountModel(sequelize);
const TaskModel = db.task = initializeTaskModel(sequelize);

Relationships.group(Account, Task);


export { db, Account, Task };
