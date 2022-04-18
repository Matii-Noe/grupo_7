const fs = require('fs');
const brcypt = require('bcryptjs');
const path = require('path');
const usersFilePath = path.join(__dirname,'../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const User = require('../models/User');
const {validationResult}=require('express-validator');


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

	if (userInDB){
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
			...req.boddy,
			password: brcypt.hashSync(req.body.password, 10),
			avatar: req.fileName
		}

		User.create(userToCreate);

		return res.redirect('login');
	},
    login: (req, res) => {
		res.render('login');
	},

    loginProcess: (req, res) => {
		res.render('index');
	},
};

module.exports = controller;