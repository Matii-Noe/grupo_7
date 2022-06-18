module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        productName: {
            type: DataTypes.STRING(100)
        },

        description: {
            type: DataTypes.TEXT
        },

        price: {
            type: DataTypes.DECIMAL(10,0)
        },

        activityName: {
            type: DataTypes.STRING(100)
        },

        categoryName: {
            type: DataTypes.STRING(100)
        },

        operatedBy: {
            type: DataTypes.STRING(100)
        },

        hotelName: {
            type: DataTypes.STRING(100)
        },

        roomType: {
            type: DataTypes.STRING(100)
        },

        nights: {
            type: DataTypes.INTEGER
        },

        bigImg: {
            type: DataTypes.STRING(100)
        },

        mediumImg: {
            type: DataTypes.STRING(100)
        },

        small1Img: {
            type: DataTypes.STRING(100)
        },

        small2Img: {
            type: DataTypes.STRING(100)
        }

    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {

        Product.belongsToMany(models.Order, {
            as: 'orders',
            through: 'products_orders',
            foreignKey: 'product_id',
            otherKey: 'order_id'
        })
    }
    return Product;
}