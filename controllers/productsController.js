/* const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const { validationResult } = require('express-validator');
const path = require('path');
const db = require('../database/models');
const {Op} = require('sequelize');
const Product = require('../database/models/Product');
const { REPL_MODE_SLOPPY } = require('repl');
const Sequelize = db.sequelize;


const controller = {
	//Este método lista todos los productos
	catalogue: (req, res) => {
		db.Product.findAll()
		.then(products => {
			res.render('catalogue.ejs', {products})
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {include: [{model: Activity, as: 'activities'}]})
		.then(products => {
			console.log(products);
			res.render('productDetail.ejs', { products })
		});
		
		/* const prodDB = await Product.findAll({include:[{model: db.Activity, where:req.params.id}] })
		.then ( r => {
			let prodDBRes = r;
			let pDBR = prodDBRes.filter( p => {
				return p.id === req.params.id;
			}) 
		}) */
		
	},

	//Este método renderiza el form de creación de los productos
	create: (req, res) => {
		res.render('create');
	},
/* 
	processCreate: (req, res) => {
		db.Product.create({
			productName: req.body.productName,
			description: req.body.description,
			bigImage: req.body.bigImage,
			mediumImage: req.body.mediumImage,
			littleImage1: req.body.littleImage1,
			littleImage2: req.body.littleImage2,
			transportName: req.body.algo,
			operatedBy: req.body.algo,
			hotelName: req.body.algo,
			nights: req.body.algo,
			roomType: req.body.algo,
			activity1: req.body.ac1,
			activity2: req.body.ac2,
			activity3: req.body.ac3,
			categoryName: ,
			price: req.body.price
		})

		let newProd = {
			id: products[products.length - 1].id + 1,
			
		};

		products.push(newProd);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

		res.redirect('index');
	},

	edit: (req, res) => {
		let id = req.params.id;
		let product = products.find(product => product.id == id);
		res.render('edit', { product });
	},

	processEdit: (req, res) => {
		let id = req.params.id;
		let prodEdit = products.find(product => product.id == id);
		prodEdit = {
			id: prodEdit.id,
			images: {
				bigImage: req.body.bigImage || prodEdit.images.bigImage,
				mediumImage: req.body.mediumImage || prodEdit.images.mediumImage,
				littleImage1: req.body.littleImage1 || prodEdit.images.littleImage1,
				litlleImage2: req.body.litlleImage2 || prodEdit.images.litlleImage2
			},
			...req.body
		};

		let resultValidation = validationResult(req);
		console.log(prodEdit);
		if (resultValidation.errors.length > 0) {
			console.log('Hay un error');
			console.log(resultValidation.errors);
			return res.render('edit', {
				errors: resultValidation.mapped(),
				product: prodEdit
			})
		} else {
			console.log('No hay error');
			let newEdit = products.map(product => {
				if (product.id == prodEdit.id) {
					return product = { ...prodEdit };
				}
				return product;
			})
			fs.writeFileSync(productsFilePath, JSON.stringify(newEdit, null, " "))
				.then(function () {
					res.redirect('/')
				});
		}
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
*/
}; 

module.exports = controller;