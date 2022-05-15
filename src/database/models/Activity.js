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
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    let config = {
        tableName: 'activities',
        timestamps: false,
    };
    const Activity = sequelize.define(alias, cols, config);

    return Activity;
}