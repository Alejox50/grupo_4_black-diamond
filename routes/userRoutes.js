const express = require('express');
const router = express.Router();
const multer = require('multer')
const { uuid } = require('uuidv4');


//const { dirname } = require('path');
const { verifyContentLogIn } = require('../middlewares/validateLoginMiddleware')
const { verifyContentRegister } = require('../middlewares/validateRegisterMiddleware')
const userController = require('./../controllers/userController');

//router.post("/register",validateRegister, upload.single("imagenUsuario") ,userController.save);

//router.get('/register',userController.register)

//router.post('/login', validateLogin, userController.processLogin);
//router.post('/register', upload.single('imagenUsuario'), validations, userController.processRegister);
//router.post('/',validateRegister, userController.processRegister)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/avatars')
    },
    filename: function (req, file, cb) {
        var extension = file.originalname.split('.')[1]
        var fileName = `${uuid()}.${extension}`
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })
router.post('/uploadAvatar/:id', upload.single('uploaded_file'), userController.setImage);

router.post("/signup", verifyContentRegister, userController.save)
router.post('/login', verifyContentLogIn, userController.processLogin);
router.get('/avatar/:id', userController.getImage);
router.get('/getuserinfo', userController.getUser);

module.exports = router;