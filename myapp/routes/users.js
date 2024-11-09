var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const userController = require('../controllers/userController');

/* crear sufijos Registro*/
router.get('/register', userController.register)

/* crear sufijos Login*/

router.get('/login', userController.login)

//router.post('/register', userController.registerPost)

//router.post('/login' , userController.loginPost)

//router.post('/logout' , userController.logout)

module.exports = router;
