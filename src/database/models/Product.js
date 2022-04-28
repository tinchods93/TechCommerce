const { sequelize, Sequelize } = require('./');
const { Brand } = require('./Brand');
const { Category } = require('./Category');

const Product = sequelize.define(
  'products',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    product_name: {
      type: Sequelize.STRING(300),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    unit_price: {
      type: Sequelize.DECIMAL(11, 2),
      defaultValue: 0,
    },
    final_price: {
      type: Sequelize.DECIMAL(11, 2),
      defaultValue: 0,
    },
    formated_price: {
      type: Sequelize.STRING(20),
      defaultValue: '0',
    },
    discount: {
      type: Sequelize.DECIMAL(5, 2),
      defaultValue: 0,
    },
    brandId: {
      type: Sequelize.INTEGER,
      field: 'brand_id'
    },
    stock: {
      type: Sequelize.INTEGER,
    },
    sells: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    description: {
      type: Sequelize.TEXT,
    },
    image: {
      type: Sequelize.STRING(500),
    },
    categoryId: {
      type: Sequelize.INTEGER,
      field: 'category_id'
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'modified_at',
  }
);

Product.hasOne(Category, {
  as: 'category',
});

Product.belongsTo(Brand,{
  foreignKey: 'brand_id',
  sourceKey: 'brandId',
  as: 'brand',
});

module.exports = {
  Product,
};
