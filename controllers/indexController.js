const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
	index: (req, res) => {
		db.Product.findAll()
		.then(products => res.render('index'),
		console.log(products))
		;
	},

};

module.exports = controller;