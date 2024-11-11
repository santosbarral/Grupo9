var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.product);

router.get("/add", productController.showFormAdd);
router.post("/add", productController.store);


module.exports = router;