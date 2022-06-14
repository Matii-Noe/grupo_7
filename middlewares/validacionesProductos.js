const { check } = require("express-validator");
const path = require('path');

let validateProduct = [
    check('productName')
        .notEmpty()
        .isLength({min:3})
        .withMessage('Debe ingresar el nombre del producto'),
    check('description')
        .notEmpty()
        .isLength({min:10})
        .withMessage('Debe ingresar la descripción del producto(mínimo de 10 caracteres)'),
    check('bigImage')
        .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png'];
            
            if (!file) {
                throw new Error('Debe seleccionar una imagen')
            } else {
                let fileExtensions = path.extname(file.originalName);
                if (!acceptedExtensions.includes(fileExtensions)) {
                    throw new Error(`Las extenciones de archivo permitidas son ${acceptedExtensions.join(',')}`)
                }
            }
            return true
        }),
    check('transport')
        .notEmpty()
        .withMessage('Debe seleccionar alguna forma de transporte'),
    check('operatedBy')
        .notEmpty()
        .isLength({min:3})
        .withMessage('Debe ingresar la empresa encargada del transoprte'),
    check('hotel')
        .notEmpty()
        .isLength({min:3})
        .withMessage('Debe ingresar el nombre del hotel'),
    check('nights')
        .notEmpty()
        .isNumeric()
        .withMessage('Debe ingresar un número indicando la cantidad de noches'),
    check('roomType')
        .notEmpty()
        .isLength({min:3})
        .withMessage('Debe ingresar el tipo de habitación'),
    check('activity1')
        .notEmpty()
        .isLength({min:3})
        .withMessage('Debe ingresar el nombre de alguna actividad'),
    check('activity2')
        .isLength({min:3})
        .withMessage('Debe ingresar al menos 3 caracteres'),
    check('activity3')
        .isLength({min:3})
        .withMessage('Debe ingresar al menos 3 caracteres'),
    check('price')
        .notEmpty()
        .isNumeric()
        .withMessage('Debe ingresar un valor numérico')
];

module.exports = validateProduct;