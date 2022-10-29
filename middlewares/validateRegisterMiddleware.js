const path = require ('path');
const { check: body } = require('express-validator');

module.exports = [
    // Cambiar el arreglo de los errores por un objeto
    body('nombres')
        .notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellidos')
        .notEmpty().withMessage('Tienes que escribir un apellido'),
    body('correo')
        .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password')
        .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
        .isLength({ min:8 }).withMessage('La contraseña debe tener minimo 8 caracteres'),
]