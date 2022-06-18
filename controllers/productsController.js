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
		db.Product.findByPk(req.params.id)
			.then(products => {
				res.render('productDetail.ejs', { products })
			})
			.catch(console.error);
	},

	//Este método renderiza el form de creación de los productos
	create: (req, res) => res.render('create.ejs'),

	processCreate: (req, res) => {
		db.Product.create({
			productName: req.body.productName,
			description: req.body.description,
			price: req.body.price,
			activityName: req.body.activityName,
			categoryName: req.body.categoryName,
			operatedBy: req.body.operatedBy,
			hotelName: req.body.hotelName,
			roomType: req.body.roomType,
			nights: req.body.nights,
			bigImg: req.body.bigImg,
			mediumImg: req.body.mediumImg,
			little1Img: req.body.little1Img,
			little2Img: req.body.little2Img
		})
		.then(products => {
			res.render('index.ejs', {products})
		})
		.catch(console.error);
	},

	edit: (req, res) => {
		let id = req.params.id;
		let promProduct = db.Product.findByPk(id);
		let promActivity = db.Activity.findAll();
		let promImage = db.Image.findAll();
		let promHotel = db.Hotel.findAll();
		let promTransport = db.Transport.findAll();
		let promCategory = db.Category.findAll();

		Promise.all([promProduct, promImage, promActivity, promHotel, promTransport, promCategory])
		.then(([product, allCategories]) => res.render('edit.ejs', {product, allCategories}))
		.catch(console.error);
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