const express = require('express');
const router = express.Router();
const controller = require('../controllers/brands.controllers.js');
const { upload } = require('../middlewares/multer.js');

router.get('/all', controller.getBrands);
router.get('/details/:id', controller.getBrandsById);

module.exports = router;
