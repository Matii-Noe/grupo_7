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

	// Detail - Detail from one product
	detail: (req, res) => {
	let id = req.params.id
	let product = products.find(product => product.id == id)
	res.render('productDetail', { product})
	},

	//Este método renderiza el form de creación de los productos
	create: (req, res) => {
		res.render('create');
	},

	processCreate: (req, res) => {
		let newProd = {
			id: products[products.length - 1].id + 1,
			...req.body
		};

		products.push(newProd);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

		res.redirect('index');
	},

	edit: (req, res) => {
		let id = req.params.id ;
		let product = products.find(product => product.id == id);
		res.render('edit', {product});
	},

	processEdit: (req, res) => {
		let id = req.params.id ;
		let prodEdit = products.find(product => product.id == id);
		prodEdit = {
			id: prodEdit.id ,
			...req.body
		};

		let newEdit = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = { ...productToEdit };
			}
			return product;
		})
		fs.writeFileSync(productsFilePath, JSON.stringify(newEdit, null, " "));
		res.redirect('index');
	},

	productCart: (req, res) => {
		res.render('productCart')
	},

	destroy: (req, res) => {
		let id = req.params.id;
		let borrar = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(borrar, null, " "));
		res.redirect('index');
	}

};

module.exports = controller;