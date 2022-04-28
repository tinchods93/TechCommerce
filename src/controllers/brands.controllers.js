const brandRepository = require('../services/brandRepository');

module.exports = {
  getBrands: async (req, res) => {
    const brands = await brandRepository.getAll();
    
    res.send(brands);
  },
  getBrandsById: async (req, res) => {
    const id = req.params.id;
    const brand = await brandRepository.getById(id);

    res.send(brand);
  },
};
