const db = require('../database/models');
const bycryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        if (req.session.user != undefined ) {
            return res.redirect('/')
        } else{
            return res.render('register')
        }
    },
    login: (req, res)=>{
        if (req.session.user != undefined ) {
            return res.redirect('/')
        } else{
            return res.render('login')
        }
    },
    registerPost: (req, res)=>{
        let form = req.body;

        if (form.email == "") {
            return res.send('Completar email')    
        }else if (form.password == "") {
            return res.send('Completar la contraseña')
        } else if (form.name =="") {
            return res.send('Completar el usuario')
        } else {
        form.password = bycryptjs.hashSync(form.password,10);
        db.User.create(form)
        .then(function (result) {
            return res.redirect("/users/login");
            
        })
        .catch(function (error) {
            return console.log(error);
            
        });  
        return res.redirect('/users/login');
    }

    },
    loginPost: (req, res)=>{
        let form = req.body;
        let filtro = {
            where: {email: form.email}
        }
        db.User.findOne(filtro)
        .then((result) => {
            if (!result) {
                return res.send('El email no se encuentra registrado')
            } else {        
                let check = bycryptjs.compareSync(form.password , result.password)
                if (check) {
                    req.session.user = result.dataValues
                    return res.redirect('/');
                } else {
                    return res.send('La contraseña es incorrecta')
                }
            }
        }).catch((err) => {
            return console.log(err);
        })
    },
    logout: (req, res)=>{
        req.session.destroy();
        return res.redirect('/');
    }
}


module.exports = userController;