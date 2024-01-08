import { Sequelize } from 'sequelize';

/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
let database = process.env.DATABASE
let username = process.env.USERNAME
let password = process.env.PASSWORD
let host = process.env.HOST
let dialect = process.env.DIALECT

const PostgresDB = new Sequelize(database, username, password, { host, dialect })
export default { PostgresDB }