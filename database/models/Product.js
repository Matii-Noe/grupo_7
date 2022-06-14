module.exports = (sequelize, DataTypes) => {

    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        productName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        transport_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            

        },
        hotel_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false

        },
        price: {
            type: DataTypes.DECIMAL(10,0),
            allowNull: false
        },
        image_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }

    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);
    Product.associate= (models) => {
        Product.hasMany(models.Hotel, {
            as: 'hotels',
            foreignKey: 'hotel_id' 
        })
    }
    Product.associate= (models) => {
        Product.hasMany(models.Transport, {
            as: 'transports',
            foreignKey: 'transport_id' 
        })
    }
    Product.associate= (models) => {
        Product.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'image_id' 
        })
    }
    Product.associate= (models) => {
        Product.belongsToMany(models.Order, {
            as: 'orders',
            through:'products_orders',
            foreignKey: 'order_id',
            otherKey:'product_id'
        })
    }
    Product.associate= (models) => {
        Product.belongsToMany(models.Activity, {
            as: 'activities',
            through:'products_activities',
            foreignKey: 'product_id',
            otherKey:'activities_id'
        })
    }
    Product.associate= (models) => {
        Product.belongsToMany(models.Category, {
            as: 'categories',
            through:'products_categories',
            foreignKey: 'product_id',
            otherKey:'category_id'
        })
    }

    return Product;
};