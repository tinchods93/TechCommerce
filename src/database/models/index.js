'use strict';

const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'integration';
const config = require('../config')[env];

const db = {
  sequelize: new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  ),
  Sequelize
};
module.exports = db;
