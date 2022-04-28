const { sequelize, Sequelize } = require('.');
const { User } = require('./User');
const { Product } = require('./Product');
const Favorite = sequelize.define(
  'favorites',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    product_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'modified_at',
  }
);

Favorite.belongsTo(User);
Favorite.belongsTo(Product);

module.exports = { Address: Favorite };
