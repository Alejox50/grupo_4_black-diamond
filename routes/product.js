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

const upload = multer({storage});

const router = express.Router();

router.get("/products", productController.products)

router.get("/camisetas", productController.camisetas)
router.get("/busos", productController.busos)
router.get("/gorras", productController.gorras)
router.get("/jeans", productController.jeans)
router.get("/joggers", productController.joggers)

router.post("/products",upload.single("imagen"), productController.product)

router.delete("/products/:id/eliminar", (req,res) => {});

router.get("/cart", productController.cart)
router.get("/productdetail", productController.detail)
router.get("/productAdmin", productController.productAdmin)





module.exports = router;