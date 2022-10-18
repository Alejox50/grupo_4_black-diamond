module.exports = (sequelize, dataTypes) => {

    let alias = "usuario";

    let cols = {
        idUser:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Nombre:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        Apelido:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        Correo:{
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };

    let config = {
        tableName: "usuarios",
        timestamps: false
    };

    const usuario = sequelize.define(alias, cols, config);

   /* usuario.associate = function(models) {
        usuario.hasMany(models.productos, {
            as: "products",
            foreignKey: "UserId"
        })
    };  */  

    return usuario;
}