const express = require('express');
const router = express.Router();
const controller = require('../controllers/products.controllers.js');
const { upload } = require('../middlewares/multer.js');

// all by category and brand
router.get('/details/:id', controller.details);
router.get('/most-sells', controller.mostSells);
router.get('/best-deals', controller.bestDeals);
router.get('/all', controller.all);

module.exports = router;
