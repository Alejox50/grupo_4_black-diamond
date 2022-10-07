const { validationResult } = require("express-validator");
const path = require("path");
//const user = require ('../models/user');
const fs = require("fs");
const bcrypt = require("bcrypt");
const conexion = require("./../database/models/index");
const { type } = require("os");
const { sequelize } = require("./../database/models/index");

let userController = {
  save: function (req, res) {
    let errors = validationResult(req);
    console.log(errors);
    if (errors.isEmpty()) {
      console.log("no hay errores");
      const usuario = req.body.nombres;
      const apellido = req.body.apellidos;
      const email = req.body.correo;
      console.log("llegue al user controler");
      /*conexion.query('INSERT INTO usuario (nombres,apellido, email) VALUES(?,?,?)',{
            replacements: [usuario, apellido, email],
            type:sequelize.QueryTypes.INSERT
        })*/
    } else {
      console.log("hay errores");
      return res.status(409).send(errors);
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
      let usersJSON = fs.readFileSync("./data/users.json", {
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
