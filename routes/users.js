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

/*** GET ALL PRODUCTS ***/ 
router.get('/', usersController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', usersController.create); 
router.post('/', usersController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', usersController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit',usersController.edit); 
router.put('/:id', usersController.update); 


/*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', usersController.destroy); 


module.exports = router;