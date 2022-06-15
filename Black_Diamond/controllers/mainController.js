const path = require("path");
let mainController = {
    home: function(req, res) {
        res.render('index')
    },
    cart: function(req, res) {
        res.render('./products/cart')
    },

    detail: function(req, res) {
        res.render('./products/productdetail')
    },
    login: function(req, res) {
        res.render('./users/login')
    },
    register: function(req, res) {
        res.render('./users/register')
    },
    products: function(req, res) {
        let nombre = [
            "Camisa azul"
        ];
        let descripcion = [
            "Camisa Azul tipo Jean para Hombre"
        ];
        let precio = [
            "$ 120.000"
        ]
        res.render("./products/productAdmin", {"nombre" : nombre, "descripcion" : descripcion, "precio" : precio})
    }

};

module.exports = mainController;