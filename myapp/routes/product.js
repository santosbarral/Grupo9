var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.product); //Esta se tiene que ir

router.get('/id/:idProduct', productController.detalle);

router.get("/add", productController.showFormAdd);

router.post("/add", productController.store);

module.exports = router;