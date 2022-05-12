module.exports = (sequelize, DataTypes) => {

    let alias = 'Order';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false

        },
        finalPrice: {
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        }
    };
    let config = {
        tableName: 'orders',
        timestamps: false
    };
    const Order = sequelize.define(alias, cols, config);

    return Order;
};