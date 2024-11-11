const db = require('../database/models');


const productController = {
    product:(req, res)=>{
        return res.render("product")
    },
    showFormAdd: (req, res)=>{
        return res.render("product-add");
        
    },
    store:(req, res)=>{
        let products= req.body;
        db.Product.create(products)
    .then(function (results) {
      return res.redirect("/") 
    })
    .catch(function (err) {
      console.log(err);
    })
    
    }
}
    
module.exports = productController