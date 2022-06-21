const db = require('../../database/models');

module.exports = {
    list: (req,res) => {
        db.Product.findAll({
            attributes: ['id', 'productName', 'description', 'categoryName']
        })
        .then( products => {
            let respuesta = {
                meta: {
                    status: 200,
                    count: products.length,
                    url: '/api/products'
                },
                data: products
            };
            res.json(respuesta);
        })
    },
    detail: (req,res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: '/api/products/:id'
                },
                id: product.id,
                productName: product.productName,
                description: product.description,
                price: product.price,
                activityName: product.activityName,
                categoryName: product.categoryName,
                operatedBy: product.operatedBy,
                hotelName: product.hotelName,
                roomType: product.roomType,
                nights: product.nights,
                bigImg: product.bigImg
            };
            res.json(respuesta);
        })
    }
}