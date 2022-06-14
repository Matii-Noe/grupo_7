module.exports = (sequelize, DataTypes) => {

    let alias = 'Activity';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        ActivityName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    };
    let config = {
        tableName: 'activities',
        timestamps: false,
    };
    const Activity = sequelize.define(alias, cols, config);
    Activity.associate= (models) => {
        Activity.belongsToMany(models.Product, {
            as: 'products',
            through:'products_activities',
            foreignKey: 'activities_id',
            otherKey:'product_id'
        })
    }

    return Activity;
}