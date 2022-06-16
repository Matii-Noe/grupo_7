module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        productName: {
            type: DataTypes.STRING(100),
        },

        description: {
            type: DataTypes.TEXT,
        },

        transport_id: {
            type: DataTypes.INTEGER,
        },

        hotel_id: {
            type: DataTypes.INTEGER,
        },

        image_id: {
            type: DataTypes.INTEGER,
        },

        category_id: {
            type: DataTypes.INTEGER,
        },

        activity_id: {
            type: DataTypes.INTEGER,
        },

        price: {
            type: DataTypes.DECIMAL(10,0),
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {

        Product.belongsTo(models.Activity, {
            as: 'activities',
            foreignKey: 'activity_id'
        })

        Product.belongsTo(models.Hotel, {
            as: 'hotels',
            foreignKey: 'hotel_id'
        })

        Product.belongsTo(models.Image, {
            as: 'images',
            foreignKey: 'image_id'
        })

        Product.belongsTo(models.Transport, {
            as: 'transports',
            foreignKey: 'transport_id'
        })

        Product.belongsTo(models.Category, {
            as: 'categories',
            foreignKey: 'category_id'
        })

        Product.belongsToMany(models.Order, {
            as: 'orders',
            through: 'products_orders',
            foreignKey: 'product_id',
            otherKey: 'order_id'
        })
    }
    return Product;
}