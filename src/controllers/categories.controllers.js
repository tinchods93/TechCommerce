const {
  getAll,
  getById,
  getSubCategories,
  getMainCategories,
  getBrands
} = require('../services/categoryRepository');

module.exports = {
  all: async (req, res) => {
    const categories = await getAll();
    
    res.send(categories);
  },
  mainCategories: async (req, res) => {
    const categories = await getMainCategories();

    res.send(categories);
  },
  details: async(req,res)=>{
    const categoryId = req.params.category_id;
    const category = await getById(categoryId);

    res.send(category);
  },
  subCategories: async (req, res) => {
    const categoryId = req.params.category_id;    
    const category = await getSubCategories(categoryId);

    res.send(category);
  },
  getBrands: async (req, res) => {
    const categoryId = req.params.category_id;    
    const category = await getBrands(categoryId);

    res.send(category);
  },
};
