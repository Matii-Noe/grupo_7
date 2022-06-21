const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.User.findAll()
        .then( usuario => res.render())
    }
}


