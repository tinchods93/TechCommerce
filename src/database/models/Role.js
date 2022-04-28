const { sequelize, Sequelize } = require('.');

const Role = sequelize.define(
  'roles',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    role_name: {
      type: Sequelize.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'modified_at',
  }
);

module.exports = { Role };
