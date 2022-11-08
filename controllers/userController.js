const { generateTokens } = require('../utils/jwt');
const db = require("./../database/models/index.js");
const { resolve } = require('path');
const jwt = require('jsonwebtoken');

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
      res.status(201).json({ error: false, message: "Cuenta creada", idUser: result.dataValues.idUser });
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
  setImage: async function (req, res) {
    const id = req.params.id;
    await db.usuarios.update(
      {
        NombreImagen: req.file.filename
      },
      { where: { idUser: id } }
    ).then((result) => {
      res.status(201).json({ error: false, message: "Imagen guardada", fileName: req.file.filename });
    }).catch((err) => {
      res.status(500).json({ error: true, message: "Error interno" });
    })
  },
  getImage: async function (req, res) {
    const id = req.params.id;
    const absolutePath = resolve('./public/uploads/avatars');
    res.sendFile(`${absolutePath}\\${id}`);
  },
  getUser: async function (req, res) {
    const token = req.headers["token"];
    if (!token) return res.status(403).json({ error: true, message: "No token provided" })
    try {
      const decoded = jwt.verify(token, "it's secret")
      const user = await db.usuarios.findByPk(decoded.id)
      if (user) {
        user.Password= ""
        res.status(201).json({ error: false, user: user });
      } else {
        return res.status(401).json({ message: "Invalid token" })
      }

    }
    catch {
      return res.status(401).json({ message: "Invalid token" })
    }
  },
};

module.exports = userController;
