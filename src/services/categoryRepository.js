const { Sequelize } = require('../database/models');
const { Op } = require('sequelize');
const { Brand } = require('../database/models/Brand');
const brandsRepository = require('./brandRepository');

const { Category } = require('../database/models/Category');
const { Product } = require('../database/models/Product');
const formatObject = require('../helpers/formatObject');

const includeCommon = {
  model: Category,
  as: 'parent',
};

const outputAttributes = [
  'categoryId',
  'category_name',
  'main_category',
  'parent',
  'children'
];

const getAll = async () => {
  try {
    const response = await Category.findAll({
      include: [includeCommon, { model: Category, as: 'children' }],
    });

    const categories = JSON.parse(JSON.stringify(response));
    const formatedCategories = categories.map((category) =>
      formatObject(category, outputAttributes)
    );

    return formatedCategories;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

const getMainCategories = async () => {
  try {
    const response = await Category.findAll({
      where: {
        main_category: true,
      },
      include: { model: Category, as: 'children' },
    });

    const categories = JSON.parse(JSON.stringify(response));
    const formatedCategories = categories.map((category) =>
      formatObject(category, outputAttributes)
    );

    return formatedCategories;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

const getById = async (categoryId) => {
  try {
    const response = await Category.findByPk(categoryId, {
      include: includeCommon,
    });

    const category = JSON.parse(JSON.stringify(response));
    const formatedCategories = formatObject(category, outputAttributes);

    return formatedCategories;
  } catch (error) {
    console.log(error.message);
    return {};
  }
};

const getSubCategories = async (categoryId) => {
  try {
    // const category = await getById(categoryId);
    let response = await Category.findAll({
      where: { parent_id: categoryId },
      include: includeCommon,
    });

    const categories = JSON.parse(JSON.stringify(response));
    const formatedCategories = categories.map((category) =>
      formatObject(category, outputAttributes)
    );

    return formatedCategories;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

const getBrands = async (categoryId) => {
  try {
    let brands = await Product.findAll({
      attributes: [Sequelize.literal('DISTINCT "brand_id"'), 'brand_id'],
      where: { categoryId },
      raw: true,
    });

    if (brands) {
      brands = await Brand.findAll({
        where: {
          [Op.or]: brands.map(({ brand_id }) => {
            return { id: brand_id };
          }),
        },
      });
    }

    return brands;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
module.exports = {
  getAll,
  getById,
  getSubCategories,
  getMainCategories,
  getBrands,
};
