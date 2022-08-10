const express = require('express');
const userController = require('../controllers/userController.js');
const multer = require('multer');
const path = require ('path');
//const { dirname } = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images/avatars'))
    },
    filename: (req, file, cb) => {
        console.log(file)
        const newFilename = 'avatar-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

router.get("/login", userController.login)
router.get("/register", userController.register)

router.post("/login", userController.processLogin);
router.post('/register', upload.single('imagenUsuario'), userController.processRegister);




module.exports = router;