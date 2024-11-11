
const function1 = function (sequelize, datatype) {

    let alias = "Product";

    let cols={
        id: {
            autoincrement: true,
            primaryKey: true,
            type: datatype.INTEGER
        },

    }

    let config = {
        tablename: "products",
        timestamps: false,
        underscored: true
    }

    let Product = sequelize.define(alias, cols, config);

    return Product;
        //Faltan los associates
}

module.exports = function1; 