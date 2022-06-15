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
        Activity.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'activity_id',
        })
    }

    return Activity;
}