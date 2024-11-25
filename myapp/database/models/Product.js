
const fun = (sequelize, datatypes)=>{

    let alias = "Product";

    let cols={
        id: {
            autoincrement: true,
            primaryKey: true,
            type: datatype.INTEGER
        },
        productImg:{
            type: datatype.STRING,
          
        },
        productName:{
            type: datatype.STRING,
            
        },
        productDescription:{
            type: datatype.STRING,
       
        },
        createdAt : {
            type : datatype.DATE,
            notNull: true
        },
        updatedAt : {
            type : datatype.DATE,
            notNull: true
        },
        deletedAt : {
            type : datatype.DATE
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