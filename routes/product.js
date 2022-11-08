const express = require('express');
const productController = require('../controllers/productController.js');
const router = express.router();
const multer = require('multer');
const { uuid } = required('uuidv4')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/products')
    },
    filename: function (req, file, cb) {
        var extension = file.originalname.split('.')[1]
        var fileName = `${uuid()}.${extension}`
        cb(null, fileName)
    }
})
const upload = multer({ storage: storage });


router.post('/uploadProduct/:id', upload.single('uploaded_file'), productController.setImage);
router.post("/products", productController.addProduct)
router.post("/products/edit/:id", productController.editProduct)
router.get("/products", productController.getAllProducts)
router.get("/products/:id", productController.getProductById)
router.get("/products/categoria/:categoria", productController.getProductsByCategoria)
router.get('/products/image/:id', productController.getImage);

router.delete("/products/:id", productController.editProduct);

module.exports = router;