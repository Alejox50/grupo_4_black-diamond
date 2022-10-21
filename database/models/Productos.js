const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    let alias = "productos";

    let cols = {
        IdProductos:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        Nombre_p:{
            type: DataTypes.STRING(100),
            allowNull: false
        },

        Descripcion:{
            type: DataTypes.STRING(1000),
            allowNull: false
        },

        Precio:{
            type: DataTypes.FLOAT,
            allowNull: false
        },

        IdUsuario:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

        IdTalla:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

        IdColor:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },

        IdCategoria:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }

    };

    let config = {
        tableName: "producto",
        timestamps: false
    };

    const Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(models) {
        Productos.belongsTo(models.categoria),
        Productos.hasMany(models.color),
        Productos.hasMany(models.Tallas),
        Productos.belongsToMany(models.usuarios, {through: 'Carrito'} ),
        Productos.hasMany(models.imagen)

    };

    return Productos;

}