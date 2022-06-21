const path = require('path');
const db = require('../database/models')


const controller = {
	index: (req, res) => {
		db.Product.findAll()
		.then(products => res.render('index.ejs', {products}))
		;
	},

};

module.exports = controller;