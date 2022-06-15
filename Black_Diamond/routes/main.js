const express = require('express');
const mainController = require('../controllers/mainController.js');

const router = express.Router();

router.get("/", mainController.home)
router.get("/cart", mainController.cart)
router.get("/productdetail", mainController.detail)
router.get("/login", mainController.login)
router.get("/register", mainController.register)
router.get("/productAdmin", mainController.products)

module.exports = router;