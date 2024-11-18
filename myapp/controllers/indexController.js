const { where } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;

const indexController = {
    index:(req, res)=>{
        db.Product.findAll()
        .then(function (result) {          
          return res.render("index", { listaProductos: result })
        })
        .catch(function (err) {
          return console.log(err);
        })
    }
}
    
module.exports = indexController

