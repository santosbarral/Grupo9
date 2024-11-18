const { where } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;


const productController = {
    product:(req, res)=>{
        return res.render("product")
    },
    detalle: (req, res)=>{
      let id = req.params.idProduct; //Del sistema de routeo :idProducto

      db.Product.findByPk(id)
      .then(function (results) {
        return res.render('product',{product: results})
      })
      .catch(function (err) {
        return console.log(err);

      })
      
    },// Detalle lo dejo para despues  
    showFormAdd: (req, res)=>{
        return res.render("product-add"); 
    },
    store:(req, res)=>{
      let product= req.body
      
      db.Product.create(product)
      .then(function (results) {
        return res.redirect('/index');
      })
      .catch(function (error) {
        return console.log(error)
      })    
    }
}
    
module.exports = productController