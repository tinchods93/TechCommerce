const { sequelize, Sequelize } = require('.');

const Brand = sequelize.define(
  'brands',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    brand_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    brand_image: {
      type: Sequelize.STRING(500),
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'modified_at',
  }
);

module.exports = { Brand };
