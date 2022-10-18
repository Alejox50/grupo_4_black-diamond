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

    return talla;
}