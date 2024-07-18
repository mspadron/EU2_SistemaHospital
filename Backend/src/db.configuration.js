/* Exportamos las variables de entorno que nos permiten conectarnos a POSTGRESQL */

const { config } = require('dotenv');
config();

module.exports = {
  db: {
    user: process.env.DB_USER || 'grupo2',
    password: process.env.DB_PASSWORD || 'grupo2',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5478,
    database: process.env.DB_DATABASE || 'baseHospital',
  },
};
