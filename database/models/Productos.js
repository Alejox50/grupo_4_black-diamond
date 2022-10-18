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
        Productos.belongsTo(models.category, {
            as: "category",
            foreignKey: "CategoryId"
        }),
        Productos.belongsTo(models.color, {
            as: "color",
            foreignKey: "ColorId"
        }),
        Productos.belongsTo(models.Tallas, {
            as: "size",
            foreignKey: "SizeId"
        }),
        Productos.belongsTo(models.usuario, {
            as: "usuarios",
            foreignKey: "UserId"
        })

    };

    return Productos;

}