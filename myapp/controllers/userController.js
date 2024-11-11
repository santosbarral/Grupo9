const db = require('../database/models');
const bycryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        return res.render("register")
    },
    login: (req, res)=>{
        return res.render("login")
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
                return res.send('no hay mail')
            } else {        
                let check = bycryptjs.compareSync(form.password , result.password)
                if (check) {
                    req.session.user = result.dataValues
                    return res.redirect('/')
                } else {
                    return res.send('la contraseña es incorrecta')
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