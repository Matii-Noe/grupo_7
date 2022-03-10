// ************ Require's ************
const express = require('express');
const router = express.Router();
/*const multer = require('multer')*/
const path = require('path')

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

/*** CREATE ONE PRODUCT ***/ 
router.get('/register/', usersController.register); 
router.post('/', usersController.processRegister); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit',usersController.login); 
router.put('/:id', usersController.loginProcess); 

module.exports = router;