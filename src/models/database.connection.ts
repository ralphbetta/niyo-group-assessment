import { DBHOST, DBPORT, DBNAME, DBUSER, DBPASSWORD } from '../config/environment.config';
import { Sequelize } from 'sequelize';
import {Account, initializeAccountModel} from './accout.model';
import {Task, initializeTaskModel} from './task.model';
import Relationships from './database.relationship';

const sequelize = new Sequelize({
  database: DBNAME || '',
  username: DBUSER || '',
  password: DBPASSWORD || '',
  host: DBHOST || 'localhost',
  port: DBPORT || 8080,
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
