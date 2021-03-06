const path = require('path')
const {check} = require('express-validator');

let validateRegister = [
    check('firstName')
        .notEmpty().withMessage('Debes completar este campo')
        .isLength({min: 2}),

    check('lastName')
        .notEmpty().withMessage('Debes completar este campo')
        .isLength({min: 2}),

    check('email')
        .notEmpty().withMessage('Debes completar este campo')
        .isEmail().withMessage('Debes ingresar un email valido'),

    check('password')
        .notEmpty().withMessage('Debes completar este campo')
        .isLength({min: 8, max:20}).withMessage('Este campo debe tener entre 6 y 15 caracteres'),
    
    check('avatar')
        .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.jpeg'];

            if (!file) {
                throw new Error('Debe seleccionar una imagen')
            } else { 
                let fileExtensions = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtensions)) {
                    throw new Error(`Las extenciones de archivo permitidas son ${acceptedExtensions.join(',')}`)
                }
            }
            return true 
        })
];

module.exports = validateRegister;