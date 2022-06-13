const express = require('express');
const productController = require('../controllers/productController.js');

const router = express.Router();

router.get("/cart", productController.cart)
router.get("/productdetail", productController.detail)

module.exports = router;