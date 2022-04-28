require('dotenv').config();

module.exports = {
  integration: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'techcommerce_dev',
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  staging: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'techcommerce_staging',
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  prod: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'techcommerce_prod',
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};
