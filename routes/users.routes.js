// ************ Require's ************
const express = require('express');
const router = express.Router();
/*const multer = require('multer')*/
const path = require('path');

//Multer config
/*var storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/products');
    },

    filename: function(req,file,cb) {
        cb(null,'file.fieldname' + '-' + Date.now() + path.extname(file.originalname));
    }
});*/

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

//RUTAS ACCESIBLE POR CUALQUIERA
router.get('/login', usersController.login); 
router.post('/', usersController.loginProcess); 

//RUTA ACCESIBLE SOLO SIN LOGIN


//RUTA ACCESIBLE SOLO CON LOGIN


/*** CREATE ONE PRODUCT ***/ 
router.get('/register', usersController.register); 
router.post('/', usersController.processRegister); 

/*** EDIT ONE PRODUCT ***/ 


module.exports = router;