module.exports = (sequelize, dataTypes) => {

    let alias = "Imagen_usuarios";

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
        IdUsuario:{
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName: "imagen_u",
        timestamps: false
    };

    const imagen_usu = sequelize.define(alias, cols, config);
    imagen_usu.associate = function(models) {
        imagen_usu.belongsTo(models.usuarios, {
            as: "usuario",
            foreignKey: "IdUsuario"
        })
    };
    return imagen_usu;
}