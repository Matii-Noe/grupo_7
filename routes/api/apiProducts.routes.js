const express = require('express');
const router = express.Router();
const apiProducts = require('../../controllers/api/apiProductsController');

router.get('/', apiProducts.list);

router.get('/:id', apiProducts.detail);


module.exports = router