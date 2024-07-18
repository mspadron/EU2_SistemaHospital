/* Hacamos la conexion a la base de datos POSTGRESQL */

const { Pool } = require('pg');
const { db } = require('./db.configuration');

const dbPool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
});

module.exports = dbPool;
