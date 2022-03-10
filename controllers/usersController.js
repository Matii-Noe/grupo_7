const controller = {
	register: (req, res) => {
		res.send('register');
	},

    processRegister: (req, res) => {
		res.send('register');
	},

    login: (req, res) => {
		res.send('login');
	},

    loginProcess: (req, res) => {
		res.send('loginProcess');
	},
};

module.exports = controller;