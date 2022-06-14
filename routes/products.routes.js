// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); 
const validateProduct = require('../middlewares/validacionesProductos');

//Multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

var upload = multer({ storage: storage });

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/catalogue', productsController.catalogue); 
router.get('/:id', productsController.detail);

/* router.get('/productCart', productsController.productCart); 

router.get('/create', productsController.create);
router.post('/' , upload.any(), productsController.processCreate)

//**********Editar producto**********
router.get('/edit/:id', productsController.edit);
router.patch('/edit/:id' , upload.any(), validateProduct , productsController.processEdit)




router.delete('/delete/:id' , productsController.destroy); */


module.exports = router;