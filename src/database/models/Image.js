module.exports = (sequelize, DataTypes) => {

    let alias = 'Image';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        big: {
            type: DataTypes.DOUBLE,
            allowNull: false

        },
        medium: {
            type: DataTypes.DOUBLE,
            allowNull: false

        },
        small1: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        small2: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'images',
        timestamps: false
    };
    const Image = sequelize.define(alias, cols, config);

    return Image;
};