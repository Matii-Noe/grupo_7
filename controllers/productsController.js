const { validationResult } = require('express-validator');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize');
const Sequelize = db.sequelize;


const controller = {
	//Este método lista todos los productos
	catalogue: (req, res) => {
		db.Product.findAll()
		.then(products => {
			res.render('catalogue.ejs', { products })
		})
		.catch(console.error);
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			include: [
				{ association: 'activities' },
				{ association: 'images' },
				{ association: 'hotels' },
				{ association: 'transports' }
			]
		})
			.then(products => {
				res.render('productDetail.ejs', { products })
			})
			.catch(console.error);

	},

	//Este método renderiza el form de creación de los productos
	create: (req, res) => {
		db.Category.findAll()
		.then(allCategories => {
			res.render('create.ejs', {allCategories})
		})
		.catch(console.error);
	},

	processCreate: (req, res) => {
		db.Product.create({
			productName: req.body.productName,
			description: req.body.description,
			image_id: req.body.bigImage,
			image_id: req.body.mediumImage,
			image_id: req.body.littleImage1,
			image_id: req.body.littleImage2,
			transport_id: req.body.transportName,
			transport_id: req.body.operatedBy,
			hotel_id: req.body.hotelName,
			hotel_id: req.body.nights,
			hotel_id: req.body.roomType,
			activity_id: req.body.activityName,
			category_id: req.body.category_id,
			price: req.body.price
		})
		.then(product => {
			res.render('index.ejs')
		})
		.catch(console.error);
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

};

module.exports = controller;