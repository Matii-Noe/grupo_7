const controller = {
	register: (req, res) => {
		res.render('register');
	},

    processRegister: (req, res) => {
		res.render('register');
	},

    login: (req, res) => {
		res.render('login');
	},

    loginProcess: (req, res) => {
		res.render('index');
	},
};

module.exports = controller;