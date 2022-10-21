module.exports = (sequelize, dataTypes) => {

    let alias = "Imagen_productos";

    let cols = {
        IdImagen:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Imagen:{
            type: dataTypes.STRING(10000),
            allowNull: false
        },
        IdProductos:{
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName: "imagen_p",
        timestamps: false
    };

    const imagen_prod = sequelize.define(alias, cols, config);
    imagen_prod.associate = function(models) {
        imagen_prod.belongsTo(models.productos, {
            as: "producto",
            foreignKey: "IdProducto"
        })
    };

    return imagen_prod;
}