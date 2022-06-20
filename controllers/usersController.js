const bcrypt = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require('sequelize');
const Sequelize = db.sequelize;

const controller = {
	register: (req, res) => {
		res.render('register');
	},

	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		db.User.findAll()
			.then((users) => {
				let userInDB = users.find((i) => i.email == req.body.email)
				if (userInDB) {
					return res.render('register',
						{
							errors: { email: { msg: 'Este email ya está registrado' } },
							oldData: req.body
						})
				} else {
					db.User.create({
						firstName: req.body.firstName,
						lastName: req.body.lastName,
						email: req.body.email,
						password: bcrypt.hashSync(req.body.password, 10),
						userRole: req.body.userRole,
						avatar: req.file != undefined ? req.file.filename : 'img.jpg'
					})
						.then(() => res.redirect('/users/login'))
						.catch(console.error);
				}
			})
	},


	login: (req, res) => {
		return res.render('login');
	},

	loginProcess: function (req, res) {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		db.User.findAll()
			.then((users) => {
				let userToLogin = users.find((i) => i.email == req.body.email)
				if (userToLogin) {
					let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);

					if (isOkThePassword) {
						delete userToLogin.password;
						req.session.userLogged = userToLogin;

						if (req.body.remember_user) {
							res.cookie('userEmail', req.body.email, { 
								maxAge: 1000 * 60 * 60 
							})
						}
						return res.redirect('/users/profile');
					}
					return res.render('login', {errors: {
						email: {msg: 'Las credenciales son inválidas.'}
					}});
				};
				return res.render('login', {errors: {
					email: {msg: 'No se encuentra este email en nuestra base de datos'}
				}});
			})
			.catch(console.error);
	},

	profile: (req, res) => {
		res.render('user.ejs', { user: req.session.userLogged })
	},

	logout: (req, res) => {
		res.clearCookie('userEmail')
		req.session.destroy()
		res.locals.usuarioActual = null
		res.redirect('/')
	}
};

module.exports = controller;