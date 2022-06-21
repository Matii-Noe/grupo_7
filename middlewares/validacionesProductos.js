const { body } = require("express-validator");
const path = require('path');

let validateProduct = [
    body('productName')
        .notEmpty().withMessage('Debes completar este campo')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar el nombre del producto'),

    body('description')
        .notEmpty().withMessage('Debes completar este campo')
        .bail()
        .isLength({ min: 10 })
        .withMessage('Debe ingresar la descripción del producto(mínimo de 10 caracteres)'),

    body('bigImg')
        .custom((value, { req }) => {
            let file = req.files[0];
            console.log(file);
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
        }), 

    body('operatedBy')
        .notEmpty()
        .withMessage('Este campo no debe estar vacío')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar la empresa encargada del transoprte'),

    body('hotelName')
        .notEmpty()
        .withMessage('Este campo no debe estar vacío')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar el nombre del hotel'),

    body('nights')
        .notEmpty()
        .withMessage('Este campo no debe estar vacío')
        .bail()
        .isNumeric()
        .withMessage('Debe ingresar un número indicando la cantidad de noches'),

    body('roomType')
        .notEmpty()
        .withMessage('Este campo no debe estar vacío')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar el tipo de habitación'),

    body('activityName')
        .notEmpty()
        .withMessage('Este campo no debe estar vacío')
        .bail()
        .isLength({ min: 3 })
        .withMessage('Debe ingresar el nombre de alguna actividad'),

    body('price')
        .notEmpty()
        .withMessage('Este campo no debe estar vacío')
        .bail()
        .isNumeric()
        .withMessage('Debe ingresar un valor numérico'),
];

module.exports = validateProduct;