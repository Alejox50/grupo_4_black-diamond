const path = require("path");
let productController = {
    cart: function(req, res) {
        res.render('cart')
    },

    detail: function(req, res) {
        res.render('productdetail')
    }

};

module.exports = productController;