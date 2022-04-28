const { sequelize, Sequelize } = require('.');
const { User } = require('./User');

const PhoneNumber = sequelize.define(
  'phone_numbers',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    country_code: {
      type: Sequelize.STRING(15),
      validate: {
        isNull: true,
      },
    },
    area_code: {
      type: Sequelize.STRING(15),
      validate: {
        isNull: true,
      },
    },
    p_number: {
      type: Sequelize.STRING(15),
      validate: {
        isNull: true,
      },
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'modified_at',
  }
);

PhoneNumber.belongsTo(User);

module.exports = { PhoneNumber };
