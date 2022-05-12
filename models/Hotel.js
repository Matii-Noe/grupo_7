module.exports = (sequelize, DataTypes) => {

    let alias = 'Hotel';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        hotelName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roomType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nights: {
            type: DataTypes.Decimal,
            allowNull: false
        }
    };
    let config = {
        tableName: 'hotels',
        timestamps: false
    };
    const Hotel = sequelize.define(alias, cols, config);

    return Hotel;
}
