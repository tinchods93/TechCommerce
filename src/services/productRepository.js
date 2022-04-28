const { sequelize } = require('../database/models');
const { Category } = require('../database/models/Category');
const { Brand } = require('../database/models/Brand');
const { Product } = require('../database/models/Product');
const { Op } = require('sequelize');
const formatPrice = require('../helpers/formatPrice');
const formatProduct = require('../helpers/formatProduct');
const formatQueries = require('../helpers/formatQueries');

const defaultIncludeConfig = [
  {
    model: Category,
    as: 'category',
  },
  {
    model: Brand,
    as: 'brand',
  },
];
const commonQueryModel = {
  category: {
    field: 'categoryId',
  },
  brand: {
    field: 'brandId',
  },
};
const getAll = async (queries) => {
  try {
    // Definimos un modelo de Queries
    const queryModel = {
      ...commonQueryModel,
    };

    let where = formatQueries(queryModel, queries);

    const products = await Product.findAndCountAll({
      limit: queries && queries.limit ? queries.limit : '50',
      offset: queries && queries.offset ? queries.offset : '0',
      where,
      include: defaultIncludeConfig,
    });

    const rows = JSON.parse(JSON.stringify(products.rows));
    const formatedProducts = rows.map((product) => formatProduct(product));
    return { ...products, rows: formatedProducts };
  } catch (error) {
    console.log('ERROR', error);
    return [];
  }
};
const getMostSells = async (queries) => {
  try {
    const queryModel = {
      ...commonQueryModel,
    };

    let where = formatQueries(queryModel, queries);

    const products = await Product.findAndCountAll({
      limit: queries && queries.limit ? queries.limit : 10,
      offset: queries && queries.offset ? queries.offset : 0,
      where,
      order: [['sells', 'DESC']],
      include: defaultIncludeConfig,
      // plain: true
      // raw:true
    });

    const rows = JSON.parse(JSON.stringify(products.rows));
    const formatedProducts = rows.map((product) => formatProduct(product));
    return { ...products, rows: formatedProducts };
  } catch (error) {
    console.log('ERROR', error);
    return [];
  }
};

const getById = async (id) => {
  try {
    const product = await Product.findByPk(id, {
      include: defaultIncludeConfig,
    });

    const formatedProducts = formatProduct(JSON.parse(JSON.stringify(product)));

    return formatedProducts;
  } catch (error) {
    console.log('Error', error.message);
    return {};
  }
};

const getBestDeals = async (queries) => {
  try {
    const queryModel = {
      ...commonQueryModel,
    };

    let where = formatQueries(queryModel, queries);
    const products = await Product.findAndCountAll({
      where: {
        ...where,
        discount: { [Op.gt]: 0 },
      },
      limit: queries && queries.limit ? queries.limit : 10,
      offset: queries && queries.offset ? queries.offset : 0,
      order: [['discount', 'DESC']],
      include: defaultIncludeConfig,
    });

    const rows = JSON.parse(JSON.stringify(products.rows));
    const formatedProducts = rows.map((product) => formatProduct(product));
    return { ...products, rows: formatedProducts };
  } catch (error) {
    console.log('ERROR', error);
    return [];
  }
};

module.exports = {
  getMostSells,
  getBestDeals,
  getById,
  getAll,
};
