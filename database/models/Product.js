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

        created_at: {type: DataTypes.DATE},

        updated_at: {type: DataTypes.DATE},

        deleted_at: {type: DataTypes.DATE}
    }

    let config = {
        tableName: 'products',
        timestamps: true, 
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        paranoid: true,
        deletedAt: 'deleted_at'
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