
module.exports = (sequelize, DataTypes) => {

    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        userRole: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING(100),
        },

        created_at: {type: DataTypes.DATE},

        updated_at: {type: DataTypes.DATE},

        deleted_at: {type: DataTypes.DATE}
    };
    let config = {
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    };
    const User = sequelize.define(alias, cols, config);
    /* User.associate= (models) => {
        User.belongsTo(models.Order, {
            as: 'orders',
            foreignKey: 'user_id' 
        })
    } */

    return User;
};