const db = require("./models/index.js");

module.exports = async function save() {
    await db.Tallas.create({
        Talla: "XXXL",
    });
    await db.Tallas.create({
        Talla: "XXL",
    });
    await db.Tallas.create({
        Talla: "XL",
    });
    await db.Tallas.create({
        Talla: "S",
    });
    await db.Tallas.create({
        Talla: "M",
    });
    await db.Tallas.create({
        Talla: "L",
    });
    await db.Tallas.create({
        Talla: "XS",
    });
    await db.Tallas.create({
        Talla: "XXS",
    });
    await db.Tallas.create({
        Talla: "XXXS",
    });

    await db.categoria.create({
        Categoria: "Gorras",
    });
    await db.categoria.create({
        Categoria: "Jogger",
    });
    await db.categoria.create({
        Categoria: "Camisetas",
    });
    await db.categoria.create({
        Categoria: "Busos",
    });

    await db.color.create({
        Color: "Blanco",
    });
    await db.color.create({
        Color: "Negro",
    });
    await db.color.create({
        Color: "Gris",
    });
    await db.color.create({
        Color: "Naranja",
    });
    await db.color.create({
        Color: "Cafe",
    });
    await db.color.create({
        Color: "Verde",
    });
    await db.color.create({
        Color: "Rojo",
    });
    await db.color.create({
        Color: "Azul",
    });
    await db.color.create({
        Color: "Amarillo",
    });


    await db.productos.create({
        Nombre_p: "Buso VansxSailorMoon",
        Descripcion:"",
        Precio: 300000,
        IdTalla: 3,
        IdColor: 2,
        IdCategoria: 4,
        NombreImagen:"VansxSailorMoon.png"
    });
}

