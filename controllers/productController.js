const db = require("./../database/models/index.js");
const { resolve } = require('path');

let productController = {
    addProduct: async function (req, res) {
        console.log("entre");
        console.log(req.body)
        const name = req.body.name;
        const descripcion = req.body.descripcion;
        const precio = Number(req.body.precio);
        const idTalla = Number(req.body.idTalla);
        const idColor = Number(req.body.idColor);
        const idCategoria = Number(req.body.idCategoria);
        await db.productos.create({
            Nombre_p: name,
            Descripcion: descripcion,
            Precio: precio,
            IdTalla: idTalla,
            IdColor: idColor,
            IdCategoria: idCategoria
        }).then((result) => {
            res.status(201).json({ error: false, message: "Producto Creado",idProduct: result.dataValues.IdProductos });
        }).catch((err) => {
            //console.log(err)
            res.status(500).json({ error: true, message: "Error interno" });
        })
    },
    getAllProducts: async function (req, res) {
        await db.productos.findAll().then((result) => {
            res.status(201).json({ error: false, products: result });
        }).catch((err) => {
            res.status(500).json({ error: true, message: "Error interno" });
        });
    },
    getProductsByCategoria: async function (req, res) {
        const categoria = req.params.categoria;
        await db.productos.findAll(
            { where: { IdCategoria: categoria } }
        ).then((result) => {
            res.status(201).json({ error: false, products: result });
        }).catch((err) => {
            res.status(500).json({ error: true, message: "Error interno" });
        });
    },
    getProductById: async function (req, res) {
        const id = req.params.id;
        await db.productos.findByPk(id).then((result) => {
            res.status(201).json({ error: false, products: result });
        }).catch((err) => {
            res.status(500).json({ error: true, message: "Error interno" });
        });
    },
    editProduct: async function (req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const descripcion = req.body.descripcion;
        const precio = req.body.precio;
        const idTalla = req.body.idTalla;
        const idColor = req.body.idColor;
        const idCategoria = req.body.idCategoria;
        await db.productos.update(
            {
                Nombre_p: name,
                Descripcion: descripcion,
                Precio: precio,
                IdTalla: idTalla,
                IdColor: idColor,
                IdCategoria: idCategoria
            },
            { where: { IdProductos: id } }
        ).then((result) => {
            res.status(201).json({ error: false, message: "Producto editado" });
        }).catch((err) => {
            res.status(500).json({ error: true, message: "Error interno" });
        })
    },
    deleteProduct: async function (req, res) {
        const id = req.params.id;
        await db.productos.destroy({ where: { IdProductos: id } }).then((result) => {
            res.status(201).json({ error: false, message: "Producto Eliminado" });
        }).catch((err) => {
            res.status(500).json({ error: true, message: "Error interno" });
        });
    },
    setImage: async function (req, res) {
        const id = req.params.id;
        await db.productos.update(
            {
                NombreImagen: req.file.filename
            },
            { where: { IdProductos: id } }
        ).then((result) => {
            res.status(201).json({ error: false, message: "Imagen guardada", fileName: req.file.filename });
        }).catch((err) => {
            res.status(500).json({ error: true, message: "Error interno" });
        })
    },
    getImage: async function (req, res) {
        const id = req.params.id;
        const absolutePath = resolve('./public/uploads/products');
        res.sendFile(`${absolutePath}\\${id}`);
    },
};

module.exports = productController;