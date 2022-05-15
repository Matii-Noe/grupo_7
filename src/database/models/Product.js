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
            type: DataTypes.REAL,
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

    return Product;
};