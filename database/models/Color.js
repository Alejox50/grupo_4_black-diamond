module.exports = (sequelize, dataTypes) => {

    let alias = "color";

    let cols = {
        idColor:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Color:{
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };

    let config = {
        tableName: "color",
        timestamps: false
    };

    const color = sequelize.define(alias, cols, config);

    return color;
}