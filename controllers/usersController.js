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
			return res.render('users/registro', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		user.create(req.body);
		return res.send('Ok, se guardo')
	},
    login: (req, res) => {
		res.render('login');
	},

    loginProcess: (req, res) => {
		res.render('index');
	},
};

module.exports = controller;