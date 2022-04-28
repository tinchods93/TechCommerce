const productRepository = require('../services/productRepository');

module.exports = {
  all: async (req, res) => {    
    const products = await productRepository.getAll(req.query);

    res.send(products);
  },
  details: async (req, res) => {
    const id = req.params.id;
    const product = await productRepository.getById(id);

    res.send(product);
  },
  cart: (req, res) => {
    res.send('cart');
  },
  mostSells: async (req, res) => {
    const prodMostSells = await productRepository.getMostSells(req.query);

    res.send(prodMostSells);
  },
  bestDeals: async (req, res) => {
    const prodBestDeals = await productRepository.getBestDeals(req.query);

    res.send(prodBestDeals);
  },
};
