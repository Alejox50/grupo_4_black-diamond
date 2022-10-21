const { validationResult } = require("express-validator");
const path = require("path");
//const user = require ('../models/user');
const fs = require("fs");
const bcrypt = require("bcrypt");
//const conexion = require("./../database/models/index.js");
const { type } = require("os");
const sequelize  = require("./../database/models/index.js");

let userController = {
  save: function (req, res) {
    let errors = validationResult(req);
    console.log(errors);
    if (errors.isEmpty()) {
      console.log("no hay errores");
      const usuario = req.body.nombres;
      const apellido = req.body.apellidos;
      const email = req.body.correo;
      const password = req.body.password;
      const imagen = req.file.filename; 
      console.log("llegue al user controller");
      sequelize.query('INSERT INTO usuario (nombres,apellidos,correo,password) VALUES(?,?,?,?)',{
            replacements: [usuario, apellido, email, password],
            type:sequelize.QueryTypes.INSERT
        });
      sequelize.query('INSERT INTO imagen_u (imagen) VALUES(?)',{
          replacements: [imagen],
          type:sequelize.QueryTypes.INSERT
      });
    } else {
      console.log("hay errores");
      return res.status(409).send(errors);
      res.redirect('/user/login');
    }
  },

  login: function (req, res) {
    res.render("./users/login");
  },

  register: function (req, res) {
    res.render("./../views/users/register.ejs");
  },

  processLogin: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let usersJSON = fs.readFileSync("./database/models/Usuario.js", {
        encoding: "UTF-8",
      });
      let users;
      if (usersJSON == "") {
        users = [];
      } else {
        users = JSON.parse(usersJSON);
      }

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.password, users[i].password)) {
            let usuarioALoguearse = users[i];
            break;
          }
        }
      }
      if (usuarioALoguearse == undefined) {
        return res.render("login", {
          errors: [{ msg: "Credenciales Invalidas" }],
        });
      }

      req.session.usuarioLogueado = usuarioALoguearse;
      res.render("success");
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
    console.log(resultValidation);
    if (resultValidation.errors.length > 0) {
      return res.render("./users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    req.file.filename;
    user.create({ filename: req.file.filename, ...req.body });
    res.redirect("/login");
  },
};

module.exports = userController;
