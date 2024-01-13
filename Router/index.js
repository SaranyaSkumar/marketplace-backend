const express = require('express');
const router = express.Router();

const productRoutes = require('./product.route');

// Use the specific routes
router.use('/products', productRoutes);

module.exports = router;
