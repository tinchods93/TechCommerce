const { Brand } = require('../database/models/Brand');

const getAll = async () => {
  try {
    const brands = await Brand.findAll();
    return brands;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};


const getById = async (id) => {
  try {
    const brand = await Brand.findByPk(id);

    return brand;
  } catch (error) {
    console.log(error.message);
    return {};
  }
};


module.exports = {
  getAll,
  getById,
};
