
const fun = (sequelize, dataTypes)=>{

    let alias = "Product";

    let cols={
        id: {
            autoIncrement: true,
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



}

module.exports = fun; 