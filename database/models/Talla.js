module.exports = (sequelize, dataTypes) => {

    let alias = "Tallas";

    let cols = {
        idSize:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Talla:{
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };

    let config = {
        tableName: "tallas",
        timestamps: false
    };

    const talla = sequelize.define(alias, cols, config);

    return talla;
}