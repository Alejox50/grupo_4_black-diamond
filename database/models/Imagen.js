module.exports = (sequelize, dataTypes) => {

    let alias = "imagen";

    let cols = {
        IdImagen:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Ruta:{
            type: dataTypes.STRING,
        },

    };

    let config = {
        tableName: "imagen",
        timestamps: false
    };

    const imagen_prod = sequelize.define(alias, cols, config);
    imagen_prod.associate = function(models) {
        imagen_prod.belongsTo(models.productos, {
            as: "producto",
            foreignKey: "IdProducto"
        })
        imagen_prod.hasOne(models.usuarios)
    };


    return imagen_prod;
}