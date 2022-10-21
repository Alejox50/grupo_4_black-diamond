module.exports = (sequelize, dataTypes) => {

    let alias = "categoria";

    let cols = {
        idCategory:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Categoria:{
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };

    let config = {
        tableName: "categoria",
        timestamps: false
    };

    const categoria = sequelize.define(alias, cols, config);    

    return categoria;
}