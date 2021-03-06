module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define("Product",{
        name : {
            type : DataTypes.STRING,
        },

        price : {
            type : DataTypes.BIGINT,
        },

        discount : {
            type : DataTypes.FLOAT
        },

        description : {
            type : DataTypes.STRING
        },

        weight : {
            type : DataTypes.FLOAT
        },

        condition : {
            type : DataTypes.STRING
        }
    }, {
        paranoid: true,
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    Product.associate = models => {
        // associations can be defined here
        Product.belongsTo(models.User,{
            foreignKey:{
                allowNull : false
            }
        })
    };

    return Product;
};