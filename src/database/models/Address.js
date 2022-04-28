const { sequelize, Sequelize } = require('./');
const { User } = require('./User');

const Address = sequelize.define(
  'addresses',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    neighborhood: {
      type: Sequelize.STRING(100),
    },
    street: {
      type: Sequelize.STRING(100),
    },
    city: {
      type: Sequelize.STRING(100),
      validate: {
        isNull: true,
      },
    },
    province: {
      type: Sequelize.STRING(100),
      validate: {
        isNull: true,
      },
    },
    country: {
      type: Sequelize.STRING(100),
      validate: {
        isNull: true,
      },
    },
    zipcode: {
      type: Sequelize.STRING(10),
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

Address.belongsTo(User);

module.exports = { Address };
