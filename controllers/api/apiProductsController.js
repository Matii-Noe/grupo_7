const db = require('../../database/models');

module.exports = {
    list: (req,res) => {
        db.Product.findAll({
            attributes: ['id', 'productName', 'description', 'categoryName', 'bigImg', 'price']
        })
        .then( products => {
            for  (let i = 0;i<products.length;i++){
                products[i].setDataValue("detail","http://localhost:3007/api/products/detail/" + products[i].id)
            } 
            for (let i = 0; i < products.length; i++) {
                products[i].setDataValue(
                'pathImg',
                'http://localhost:3007/images/' +
                    products[i].bigImg,
                )
            }
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
                bigImg: "http://localhost:3007/images/big-img/" + product.bigImg,
            };
            res.json(respuesta);
        })
    }
}