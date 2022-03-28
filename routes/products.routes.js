// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');


//Multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
var upload = multer({ storage: storage });

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/productCart', productsController.productCart); 


router.get('/create', productsController.create);
router.post('/' , upload.any(), productsController.processCreate)


router.get('/edit/:id', productsController.edit);
router.patch('/edit/:id' , upload.any(), productsController.processEdit)


router.get('/:id', productsController.detail);

router.delete('/delete/:id' , productsController.destroy);


module.exports = router;