const express = require('express');
const userController = require('../controllers/userController.js');
const upload = require('../middlewares/multerMiddleware');
const validateRegisterMiddleware = require('../middlewares/validateRegisterMiddleware');

const validations = require('../middlewares/validateRegisterMiddleware')
//const { dirname } = require('path');
const router = express.Router();


router.get("/login", userController.login)
router.get("/register", userController.register)

router.post("/login", userController.processLogin);
router.post('/register', upload.single('imagenUsuario'), validations, userController.processRegister);




module.exports = router;