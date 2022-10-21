const express = require('express');
const userController = require('./../controllers/userController');
const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const { body, validationResult  } = require('express-validator');

//const { dirname } = require('path');
const router = express.Router();

const validateRegister = [
    body('nombres').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellidos').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('correo').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña').isLength({ min:8 }).withMessage('La contraseña debe tener minimo 8 caracteres'),
    
    /*body('imagenUsuario').custom((value, { req })  =>  {
        let file = req.body.imagenUsuario;
        console.log(req.body.imagenUsuario,'lollololol')
        console.log(value,"el baliu")
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tenes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
        })*/
]


router.get("/login", userController.login);

router.post("/register", upload.single("avatar") ,userController.save);

router.get('/register',userController.register)

router.post('/login', userController.processLogin);
//router.post('/register', upload.single('imagenUsuario'), validations, userController.processRegister);
router.post('/',validateRegister, userController.processRegister)



module.exports = router;