module.exports = (sequelize, DataTypes) => {

    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        activityName: {
            type: DataTypes.STRING(100),
            allowNull: false

        },
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config);
    Category.associate= (models) => {
        Category
        .belongsToMany(models.Product, {
            as: 'products',
            through:'products_categories',
            foreignKey: 'category_id',
            otherKey:'product_id'
        })
    }

    return Category;
};