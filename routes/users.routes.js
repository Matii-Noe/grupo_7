// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path');

/*Middlewares*/

const validateRegister = require('../middlewares/validacionesRegistro');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Multer config
var storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/avatars');
    },

    filename: function(req,file,cb) {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });


// ************ Controller Require ************
const usersController = require('../controllers/usersController');


//RUTA ACCESIBLE SOLO SIN LOGIN
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('image'),/* validateRegister, */ usersController.processRegister); 

//RUTA ACCESIBLE SOLO CON LOGIN
router.get('/login', guestMiddleware, usersController.login)
router.post('/login',
usersController.loginProcess); 
router.get('/profile/',authMiddleware, usersController.profile);
router.get ('/logout', authMiddleware, usersController.logout)

module.exports = router;