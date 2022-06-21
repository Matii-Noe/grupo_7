const fs = require('fs');
const {check} = require('express-validator');

let validateRegister = [
    check('name')
        .notEmpty().withMessage('Debes completar este campo')
        .isLength({min: 2}),
    check('email')
        .notEmpty().withMessage('Debes completar este campo')
        .isEmail().withMessage('Debes ingresar un email valido'),
    check('password')
        .notEmpty().withMessage('Debes completar este campo')
        .isLength({min: 8, max:20}).withMessage('Este campo debe tener entre 6 y 15 caracteres')
];

module.exports = validateRegister;