//const db = require('../database/models');


const userController = {
    register: (req, res)=>{
        return res.render("register")
    },
    login: (req, res)=>{
        return res.render("login")
    }
    //logout: (req, res)=>{
      //  req.session.destroy();
        //return res.redirect('/');}
    }

module.exports = userController;