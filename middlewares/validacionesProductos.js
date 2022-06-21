const { body } = require("express-validator");
const path = require('path');

let validateProduct = [
    body('productName')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar el nombre del producto')
        .bail(),

    body('description')
        .notEmpty()
        .isLength({ min: 10 })
        .withMessage('Debe ingresar la descripción del producto(mínimo de 10 caracteres)')
        .bail(),

    body('bigImg')
        .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.jpeg'];

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

    body('operatedBy')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar la empresa encargada del transoprte')
        .bail(),

    body('hotelName')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar el nombre del hotel')
        .bail(),

    body('nights')
        .notEmpty()
        .isNumeric()
        .withMessage('Debe ingresar un número indicando la cantidad de noches')
        .bail(),

    body('roomType')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar el tipo de habitación')
        .bail(),

    body('activityName')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar el nombre de alguna actividad')
        .bail(),

    body('price')
        .notEmpty()
        .isNumeric()
        .withMessage('Debe ingresar un valor numérico')
        .bail(),
];

module.exports = validateProduct;