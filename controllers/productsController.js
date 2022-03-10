const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	//Este método lista todos los productos
	catalogue: (req, res) => {
		res.render('catalogue');
	},
	//Este método renderiza el form de creación de los productos
	create: (req, res) => {
		res.render('create');
	},

	processCreate: (req, res) => {
		res.redirect('processCreate');
	},

	edit: (req, res) => {
		res.render('edit');
	},

	processEdit: (req, res) => {
		res.redirect('processCreate');
	},

	

	

	productDetail: (req, res) => {
		res.render('catalogue');
	},

	destroy: (req, res) => {
		res.render('catalogue');
	},

};

module.exports = controller;