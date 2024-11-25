const fun = (sequelize, dataTypes)=>{

    let alias = "User";

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        name : {
            type : dataTypes.STRING
        },
        email : {
            type : dataTypes.STRING
        },
        password : {
            type : dataTypes.STRING
        },
        remember_token : {
            type : dataTypes.STRING
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
    };

    let config = {
        tableName : "users",
        timestamps : true,
        underscored : false
    }

    let User = sequelize.define(alias, cols, config);

    User.associate =  (models)=> {
        User.hasMany(models.Product, {
            as: "product",
            foreignKey: "" // No sé que poner como foreignkey, ya se que es la columna que relaciona las 2 tablas (esta en las 2 tablas)
        })
    }

    return User;

}

module.exports = fun;