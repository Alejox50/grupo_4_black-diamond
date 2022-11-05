const express = require('express');
const userController = require('./../controllers/userController');
const upload = require('../middlewares/multerMiddleware');
const validateRegister = require('../middlewares/validateRegisterMiddleware');
const validateLogin = require('../middlewares/validateLoginMiddleware');

//const { dirname } = require('path');
const router = express.Router();
const {verifyContentLogIn} = require('../middlewares/validateLoginMiddleware')
const {verifyContentRegister} = require('../middlewares/validateRegisterMiddleware')
//router.get("/login", userController.login);

//router.post("/register",validateRegister, upload.single("imagenUsuario") ,userController.save);

//router.get('/register',userController.register)

//router.post('/login', validateLogin, userController.processLogin);
//router.post('/register', upload.single('imagenUsuario'), validations, userController.processRegister);
//router.post('/',validateRegister, userController.processRegister)
router.post("/signup", verifyContentRegister, userController.save )
router.post('/login', verifyContentLogIn, userController.processLogin);

module.exports = router;