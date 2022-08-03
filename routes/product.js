const express = require('express');
const productController = require('../controllers/productController.js');
const path = require('path');  
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/productos")) 
    },
    filename: (req, file, cb) => {
        const newFilename ="product-" + Date.now() + path.extname(file.originalname) ;
        cb(null, newFilename)
    }
});

const upload = multer({storage})

const router = express.Router();

router.get("/cart", productController.cart)
router.get("/productdetail", productController.detail)
router.get("/productAdmin", productController.productAdmin)
router.get("/products", productController.products)
router.post("/products",upload.single("imagen"), productController.product)
router.get("/products/create", productController.create)

module.exports = router;