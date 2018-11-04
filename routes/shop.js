const path = require('path');

const express = require('express');

const productController = require('../controllers/products')

const router = express.Router();

router.get('/', productController.getIndex);
router.get('/products', productController.getProductsList);
router.get('/cart', productController.getCart);

module.exports = router;
