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
            type: DataTypes.STRING(100),
            allowNull: false
        },
        roomType: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        nights: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'hotels',
        timestamps: false
    };
    const Hotel = sequelize.define(alias, cols, config);
    Hotel.associate= (models) => {
        Hotel.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'hotel_id' 
        })
    }

    return Hotel;
    
    }