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
            type: DataTypes.STRING(100),
            allowNull: false

        },
        medium: {
            type: DataTypes.STRING(100),
            allowNull: false

        },
        small1: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        small2: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    };
    let config = {
        tableName: 'images',
        timestamps: false
    };
    const Image = sequelize.define(alias, cols, config);
    Image.associate= (models) => {
        Image.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'image_id' 
        })
    }

    return Image;
};