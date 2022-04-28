const express = require('express');
const router = express.Router();
const controller = require('../controllers/categories.controllers.js');

/**
 * @query 'id=XXXXXXX' category id
 */
router.get('/', controller.all);
router.get('/main-categories', controller.mainCategories);
router.get('/details/:category_id',controller.details);
router.get('/sub-categories/:category_id', controller.subCategories);
router.get('/brands/:category_id', controller.getBrands);

module.exports = router;
 