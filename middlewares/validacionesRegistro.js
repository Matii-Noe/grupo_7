const fs = require('fs');
const {check} = require('express-validator');

let validateRegister = [
    check('name')
        .notEmpty().withMessage('Debes completar este campo')
        .isLength({max: 100}),
    check('email')
        .notEmpty().withMessage('Debes completar este campo')
        .isEmail().withMessage('Debes ingresar un email valido'),
    check('password')
        .notEmpty().withMessage('Debes completar este campo')
        .isLength({min: 6, max:15}).withMessage('Este campo debe tener entre 6 y 15 caracteres')
];

module.exports = validateRegister;