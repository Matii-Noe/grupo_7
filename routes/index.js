// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/', productsController.index); 

router.get('/login', productsController.login); 

router.get('/productCart', productsController.productCart); 

router.get('/productDetail', productsController.productDetail); 

router.get('/register', productsController.register); 

router.get('/edit', productsController.edit);

router.get('/create', productsController.create);

module.exports = router;