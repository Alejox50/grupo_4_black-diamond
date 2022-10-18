const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "products";

    let cols = {
        idProducts:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        Nombre:{
            type: DataTypes.STRING(100),
            allowNull: false
        },

        Descripcion:{
            type: DataTypes.STRING(1000),
            allowNull: false
        },

        Imagen:{
            type: DataTypes.STRING(1000),
            allowNull: false
        },

        Precio:{
            type: DataTypes.FLOAT,
            allowNull: false
        },

        UserId:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

        SizeId:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

        ColorId:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

        CategoryId:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }

    };

    let config = {
        tableName: "products",
        timestamps: false
    };

    const Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models) {
        Productos.belongsTo(models.categorias, {
            as: "categorias",
            foreignKey: "Categoria_idCategoria"
        })

        Productos.hasMany(models.imagen, {
            as: "imagen",
            foreignKey: "Productos_idProductos"
        })

    };

    return Productos;

}