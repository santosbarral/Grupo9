
const fun = (sequelize, datatypes)=>{

    let alias = "Product";

    let cols={
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        productImg:{
            type: dataTypes.STRING,
          
        },
        productName:{
            type: dataTypes.STRING,
            
        },
        productDescription:{
            type: dataTypes.STRING,
       
        },
        createdAt : {
            type : dataTypes.DATE,
            notNull: true
        },
        updatedAt : {
            type : dataTypes.DATE,
            notNull: true
        },
        deletedAt : {
            type : dataTypes.DATE
        },

    }

    let config = {
        tablename: "products",
        timestamps: true,
        underscored: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = (models)=>{
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "", // No sé que poner como foreignkey
        })
    }

    return Product;

}

module.exports = fun; 