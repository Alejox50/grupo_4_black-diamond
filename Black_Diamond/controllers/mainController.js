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
    }

};

module.exports = mainController;