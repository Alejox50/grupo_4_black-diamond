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

/* BUSOS */
    await db.productos.create({
        Nombre_p: "Buso VansxSailorMoon",
        Descripcion:"Buso vans azul con estampado de anime",
        Precio: 300000,
        IdTalla: 3,
        IdColor: 2,
        IdCategoria: 4,
        NombreImagen:"VansxSailorMoon.png"
    });
    await db.productos.create({
        Nombre_p: "Buso Motors",
        Descripcion:"Buso negro negro con estampado de moto",
        Precio: 300000,
        IdTalla: 3,
        IdColor: 2,
        IdCategoria: 4,
        NombreImagen:"busonegromoto.jpeg"
    });
    await db.productos.create({
        Nombre_p: "Buso dragon",
        Descripcion:"Buso estapando con estanpado de dragon",
        Precio: 300000,
        IdTalla: 3,
        IdColor: 2,
        IdCategoria: 4,
        NombreImagen:"busoblanco.jpeg"
    });
    /* gorras */
    await db.productos.create({
        Nombre_p: "gorra ataud",
        Descripcion:"gorra muy tenebrosa",
        Precio: 90000,
        IdTalla: 7,
        IdColor: 2,
        IdCategoria: 1,
        NombreImagen:"gorraataud.jpeg"
    });
    await db.productos.create({
        Nombre_p: "gorra ojo",
        Descripcion: "gorra de la buena suertedel ojo",
        Precio: 90000,
        IdTalla: 7,
        IdColor: 1,
        IdCategoria: 1,
        NombreImagen:"gorraojo.jpeg"
    });
    await db.productos.create({
        Nombre_p: "gorra de la noche",
        Descripcion:"gorra muy bonita de la luna",
        Precio: 90000,
        IdTalla: 7,
        IdColor: 2,
        IdCategoria: 1,
        NombreImagen:"gorraluna.jpeg"
    });
    /* joggers */
    await db.productos.create({
        Nombre_p: "jogger 013",
        Descripcion:"jogger premiun muy comodo",
        Precio: 150000,
        IdTalla: 6,
        IdColor: 2,
        IdCategoria: 2,
        NombreImagen:"joggernegro.jpeg"
    });
    await db.productos.create({
        Nombre_p: "jogger verde",
        Descripcion:"jogger muy sencillo y comodo",
        Precio: 100000,
        IdTalla: 7,
        IdColor: 2,
        IdCategoria: 2,
        NombreImagen:"joggerverde.jpeg"
    });
    await db.productos.create({
        Nombre_p: "jogger cafe",
        Descripcion:"jogger muy sencillo y comodo",
        Precio: 100000,
        IdTalla: 3,
        IdColor: 2,
        IdCategoria: 2,
        NombreImagen:"joggercafe.jpeg"
    });
    /* Camisetas */
    await db.productos.create({
        Nombre_p: "camisa buuu",
        Descripcion:"Camisa negra con estanpado fantasma",
        Precio: 80000,
        IdTalla: 5,
        IdColor: 2,
        IdCategoria: 3,
        NombreImagen:"camisatiburon.jpeg"
    });
    await db.productos.create({
        Nombre_p: "camisa calavera",
        Descripcion:"Camisa azul de calavera",
        Precio: 80000,
        IdTalla: 3,
        IdColor: 8,
        IdCategoria: 3,
        NombreImagen:"camisaazul.jpeg"
    });
    await db.productos.create({
        Nombre_p: "camisa shark",
        Descripcion:"Camisa negra con estanpado de tiburon",
        Precio: 80000,
        IdTalla: 6,
        IdColor: 2,
        IdCategoria: 3,
        NombreImagen:"camisanegra.jpeg"
    });

}

