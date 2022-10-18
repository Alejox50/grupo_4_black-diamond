module.exports = (sequelize, dataTypes) => {

    let alias = "category";

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
        tableName: "category",
        timestamps: false
    };

    const categoria = sequelize.define(alias, cols, config);

    categoria.associate = function(models) {
        categoria.hasMany(models.productos, {
            as: "products",
            foreignKey: "CategoryId"
        })
    };    

    return categoria;
}