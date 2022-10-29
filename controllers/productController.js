const { json } = require('express');
const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
/*const Ruta = req.file.filename;
      const imagen = await db.imagen.create({Ruta});
      await db.usuarios.create ({
        Nombres: usuario,
        Apellidos: apellido,
        Correo: email,
        Password:password,
        imagenIdImagen:imagen.imagenUsuario,
      });*/
 

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
        res.render('./products/productAdmin')
    },
    product: function(req,res) {
        if (req.file) {
            
            product.image = req.file.filename
            products.push(product)
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
            res.redirect("./database/models/Productos.js");
        }
        else {
            res.render('./products/productAdmin')
        }
    },
    delete: function(req,res) {
        
    },
    camisetas: function(req, res) {
        res.render('./products/camisetas')
    },
    busos: function(req, res) {
        res.render('./products/busos')
    },
    gorras: function(req, res) {
        res.render('./products/gorras')
    },
    joggers: function(req, res) {
        res.render('./products/joggers')
    },
    jeans: function(req, res) {
        res.render('./products/jeans')
    }
    

};

module.exports = productController;