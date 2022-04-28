const { sequelize, Sequelize } = require('./');
const { Address } = require('./Address');
const { Role } = require('./Role');

const User = sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    avatar_image: {
      type: Sequelize.STRING(500),
    },
    first_name: {
      type: Sequelize.STRING(50),
    },
    last_name: {
      type: Sequelize.STRING(50),
    },
    address_id: {
      type: Sequelize.INTEGER,
    },
    phone_number_id: {
      type: Sequelize.INTEGER,
    },
    birthday: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'modified_at',
  }
);

User.hasOne(Role);
User.hasOne(Address);

module.exports = { User };
