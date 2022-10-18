module.exports = (sequelize, dataTypes) => {

    let alias = "Tallas";

    let cols = {
        idsize:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Nombre:{
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };

    let config = {
        tableName: "size",
        timestamps: false
    };

    const talla = sequelize.define(alias, cols, config);

    talla.associate = function(models) {
        talla.hasMany(models.productos, {
            as: "products",
            foreignKey: "SizeId"
        })
    };    

    return talla;
}