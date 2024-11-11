
const function1 = function (sequelize, datatype) {

    let alias = "Product";

    let cols={
        id: {
            autoincrement: true,
            primaryKey: true,
            type: datatype.INTEGER
        },
        productImg:{
            type: datatype.STRING
        },
        productName:{
            type: datatype.STRING
        },
        productDescription:{
            type: datatype.STRING
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

    return Product;
        //Faltan los associates
}

module.exports = function1; 