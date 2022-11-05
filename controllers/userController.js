const { generateTokens } = require('../utils/jwt');
const db = require("./../database/models/index.js");
//console.log (db);
let userController = {
  save: async function (req, res) {
    const usuario = req.body.firstName;
    const apellido = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    await db.usuarios.create({
      Nombres: usuario,
      Apellidos: apellido,
      Correo: email,
      Password: password,
    }).then((result) => {
      res.status(201).json({ error: false, message: "Cuenta creada" });
    }).catch((err) => {
      res.status(500).json({ error: true, message: "Error interno" });
    })
  },
  processLogin: async function (req, res) {

    const email = req.body.email;
    const password = req.body["password"];
    const user = await db.usuarios.findOne({
      where: {
        Correo: email,
        Password: password,
      }
    });
    if (!user) {
      return res
        .status(401)
        .json({ error: true, message: "Correo y contraseña No validos" });
    } else {
      const { accessToken, refreshToken } = await generateTokens(user);
      res.status(200).json({
        error: false,
        accessToken,
        refreshToken,
        message: "Usuario logeado exitosamente",
      });
    }
  },
};

module.exports = userController;
