const User = require('../models/User')

function userLoggedMiddleware(req, res, next){
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    res.locals.isLogged = false

    if(userFromCookie){
        
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged){

        res.locals.isLogged = true

        res.locals.usuarioActual = req.session.userLogged
    }

    next();
}

module.exports = userLoggedMiddleware
