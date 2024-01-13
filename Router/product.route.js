const express = require('express');
const router = express.Router();
const productsController = require('../Controllers/products');

router.post('/', productsController.create_product);
router.get('/:id', productsController.get_product);
router.get('/', productsController.get_products);
router.put('/:id', productsController.update_product);

module.exports = router;
