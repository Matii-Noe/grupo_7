module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductActivity';
    let cols = {
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        activities_id:  {
            type: DataTypes.INTEGER,
            references: {
                model: 'Activity',
                key: 'id'
            }
        }
    };
    let config = {
        tableName: 'products_activities',
        timeStamps: false,
    };

    const ProductActivity = sequelize.define(alias, cols, config);
    ProductActivity.associate= (models) => {
        ProductActivity.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'product_id' 
        })
    };
    ProductActivity.associate= (models) => {
        ProductActivity.belongsTo(models.Activity, {
            as: 'activities',
            foreignKey: 'activities_id' 
        })
    }

    return ProductActivity;
}