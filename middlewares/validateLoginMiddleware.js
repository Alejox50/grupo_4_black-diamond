const path = require ('path');
const { check: body } = require('express-validator');

module.exports = [
    // Cambiar el arreglo de los errores por un objeto
    body('correo')
        .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password')
        .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
        .isLength({ min:8 }).withMessage('La contraseña debe tener minimo 8 caracteres'),

]