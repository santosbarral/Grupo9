const { where } = require('sequelize');
const db = require('../database/models');
const op = db.Sequelize.Op;

const productController = {
    product: (req, res) => {
        let filtrado = {
            order: [["id", "DESC"]], 
            limit: null // Si quieres traer todos los registros, usa 'null'
        };
        db.Product.findAll(filtrado)
            .then((result) => {
                return res.render("index", { listaProductos: result });
            })
            .catch((err) => {
                return console.log(err);
            });
    },

    detalle: (req, res) => {
        let id = req.params.idProduct; // Del sistema de routeo :idProducto

        db.Product.findByPk(id)
            .then(function (results) {
                return res.render('product', { product: results });
            })
            .catch(function (err) {
                return console.log(err);
            });
    },

    showFormAdd: (req, res) => {
        return res.render("product-add");
    },

    store: (req, res) => {
        let product = req.body;

        db.Product.create(product)
            .then(function (results) {
                return res.redirect('/');
            })
            .catch(function (error) {
                return console.log(error);
            });
    },

    search: (req, res) => {
        let qs = req.query.search;
        let filtrado = {
            where: [{ productName: { [op.like]: `%${qs}%` } }],
            order: [["createdAt", "DESC"]], // Ordenar también por fecha de creación descendente
        };
        db.Product.findAll(filtrado)
            .then(function (results) {
                return res.render("search-results", { productos: results });
            })
            .catch(function (error) {
                return console.log(error);
            });
    }
};

module.exports = productController;
