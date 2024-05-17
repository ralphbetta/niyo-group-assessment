import * as dotenv from 'dotenv';

dotenv.config();

export const serverport = Number(process.env.API_PORT);
export const DBHOST = String(process.env.DB_HOST);
export const DBPORT = Number(process.env.DB_PORT);
export const DBNAME = String(process.env.DB_NAME);
export const DBUSER = String(process.env.DB_USER);
export const DBPASSWORD = String(process.env.DB_PASSWORD);
export const JWTSECRETE = String(process.env.JWT_SECRETE);

export const ENVIRONMENT = String(process.env.ENVIRONMENT);
