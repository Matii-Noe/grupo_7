module.exports = (sequelize, DataTypes) => {

    let alias = 'Transport';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        transportName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        operatedBy: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'transports',
        timestamps: false
    };
    const Transport = sequelize.define(alias, cols, config);
    Transport.associate= (models) => {
        Transport.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'transport_id' 
        })
    }

    return Transport;
};