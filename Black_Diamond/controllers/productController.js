const { json } = require('express');
const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productController = {
    cart: function(req, res) {
        res.render('./products/cart')
    },

    detail: function(req, res) {
        res.render('./products/productdetail')
    },
    productAdmin: function(req, res) {
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
    },
    products: function(req, res) {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render("./products/products", {"products" : products})
    },
    create: function(req,res) {
        res.render('./products/products_create')
    },
    product: function(req,res) {
        if (req.file) {
            let product = {
                "name": req.body.producto,
                "price": req.body.precio,
                "discount": req.body.descuento,
                "category": req.body.categoria,
                "description": req.body.descripcion,
                "color": req.body.color
                
            }
            product.image = req.file.filename
            products.push(product)
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
            res.redirect("/products/");
        }
        else {
            res.render('./products/products_create')
        }
    }

};

module.exports = productController;