const path = require ('path');
const { body } = require('express-validator');
const multer = ('multer')

module.exports = [
    body('nombres').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellidos').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('correo')
        .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password').notEmpty('Tienes que escribir una contraseña'),
    body('imagenUsuario').custom((value, { req }) =>  {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
        })
]