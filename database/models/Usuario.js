module.exports = (sequelize, dataTypes) => {

    let alias = "usuarios";

    let cols = {
        idUser:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Nombres:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        Apellidos:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        Correo:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        Password:{
            type: dataTypes.STRING(20),
            allowNull: false
        }
 
    };

    let config = {
        tableName: "usuario",
        timestamps: false
    };

    const usuario = sequelize.define(alias, cols, config);
        usuario.associate = function(models) {
            usuario.belongsTo(models.imagen),
            usuario.belongsToMany(models.productos, {through: 'Carrito'} )
        };

    return usuario;
}