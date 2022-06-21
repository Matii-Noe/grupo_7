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
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('create', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		} else {
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
			bigImg: req.files[0].filename,
			mediumImg: req.files[1].filename
		})
		.then(products => {
			res.render('index', {products})
		})
		.catch(console.error);
	}
	},

	edit: (req, res) => {
		let id = req.params.id;
		db.Product.findByPk(id)
		.then(product => res.render('edit.ejs', {product}))
		.catch(console.error);
	},

	processEdit: (req, res) => {
		db.Product.update({
				productName: req.body.productName,
				description: req.body.description,
				price: req.body.price,
				activityName: req.body.activityName,
				categoryName: req.body.categoryName,
				operatedBy: req.body.operatedBy,
				hotelName: req.body.hotelName,
				roomType: req.body.roomType,
				nights: req.body.nights,
				bigImg: req.files[0] != undefined ? req.files[0].filename : db.Product.bigImg,
				mediumImg: req.files[1] != undefined ? req.files[1].filename : db.Product.mediumImg
			}, 
			{where: {id: req.params.id}})
			.then( product => {
				res.redirect('/')
			})
			.catch(console.error);


		/* let resultValidation = validationResult(req);
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
		} */
	},

	productCart: (req, res) => {
		res.render('productCart')
	},

	delete: (req,res) => {
		db.Product.findByPk(req.params.id)
		.then( product => {
			res.render('delete.ejs', {product})
		})
		.catch(console.error);
	},

	destroyProcess: (req, res) => {
		db.Product.destroy({
			where: {id: req.params.id}
		})
		.then( () => res.redirect('/') )
		.catch(console.error);
	} 

};

module.exports = controller;