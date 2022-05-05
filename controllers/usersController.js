const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const User = require('../models/User');
const { validationResult } = require('express-validator');
const res = require('express/lib/response');


const controller = {
	register: (req, res) => {
		res.render('register');
	},

	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('user/registro', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'este email ya esta registrado'
					}
				},
				oldData: req.body,
			})
		}

		let userToCreate = {
			...req.body,
			password: bcrypt.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		User.create(userToCreate);

		return res.redirect('login');
	},
	login: function (req, res) {
		return res.render('login');
	},

	loginProcess: function (req, res) {
		let userToLogin = User.findByField('email', req.body.email);
		if (userToLogin){
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				res.redirect('/user/profile');
			}
			return res.render('login', {errors: {
				email: {
					msg: 'Las credenciales son inválidas.'
				}
			}})	
		}
		return res.render('login', {errors: {
			email: {
				msg: 'No se encuentra este email en nuestra base de datos'
			}
		}})
	},
	profile: (req, res) =>  {
	console.log (req.session.userLogged)
    res.redirect ('/');
	//agregar profile.ejs
	},
	logout: (req, res) => {
		res.clearCookie('userEmail')
		req.session.destroy()
		res.locals.usuarioActual = null
		res.redirect('/')
	}
};

module.exports = controller;