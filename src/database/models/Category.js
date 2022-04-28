const { sequelize, Sequelize } = require('./');

const Category = sequelize.define(
  'categories',
  {
    categoryId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: 'id'
    },
    category_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    main_category: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'modified_at',
  }
);

Category.belongsTo(Category, {
  foreignKey: 'parent_id',
  sourceKey: 'categoryId',
  as: 'parent',
});
Category.hasMany(Category, {
  foreignKey: 'parent_id',
  sourceKey: 'categoryId',
  as: 'children',
});

module.exports = { Category };
