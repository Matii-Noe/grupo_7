const db = require('../../database/models');

module.exports = {
    list: (req,res) => {
        db.User.findAll({
            attributes: ['id', 'firstName', 'email']
        })
        .then( users => {
            for  (let i = 0;i<users.length;i++){
                users[i].setDataValue("detail","http://localhost:3020/api/users/profile/" + users[i].id)
            } 
            let respuesta = {
                meta: {
                    status: 200,
                    count: users.length,
                    url: '/api/users'
                },
                data: users
            };
            res.json(respuesta);
        })
    },
    profile: (req,res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: '/api/users/:id'
                },
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                avatar: "http://localhost:3020/images/avatars/" + user.avatar,
            };
            res.json(respuesta);
        })
    }
}
