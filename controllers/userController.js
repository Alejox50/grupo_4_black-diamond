const { validationResult } = require("express-validator");
const path = require("path");
//const user = require ('../models/user');
const fs = require("fs");
const bcrypt = require("bcrypt");
//const conexion = require("./../database/models/index.js");
const { type } = require("os");
const db = require("./../database/models/index.js");
const { brotliDecompress } = require("zlib");


//console.log (db);
let userController = {
  save: async function (req, res) {
    let errors = validationResult(req);
    console.log(errors);
    console.log(errors.isEmpty())
    console.log(req.body)
    if (true) {
      console.log("no hay errores");
      const usuario = req.body.nombres;
      const apellido = req.body.apellidos;
      const email = req.body.correo;
      const password = req.body.password; 
      await db.usuarios.create ({
        Nombres: usuario,
        Apellidos: apellido,
        Correo: email,
        Password:password,
      });
      res.redirect('/login');
    } else {
      res.render("users/register", {errors: errors.errors})
      //return res.status(409).send(errors);
      
    }
  },

  login: function (req, res) {
    res.render("./users/login");
  },

  register: function (req, res) {
    res.render("./../views/users/register.ejs");
  },

  processLogin:async function (req, res) {
    let errors = validationResult(req);

    if (true) {
      /*
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
        return res.render("users/login", {
          errors: [{ msg: "Credenciales Invalidas" }],
        });
      }

      req.session.usuarioLogueado = usuarioALoguearse;
      res.render("success");*/
      console.log(req.body)
      const email = req.body.email;
      const password = req.body["contraseña"];
      const user = await db.usuarios.findOne({
        where: {
          Correo: email,
          Password: password,
        }
      });
      if(!user){
        return res.render("/login", {
          errors: [{ msg: "Credenciales Invalidas" }],
        });
      }else{
        req.session.usuarioLogueado = user;
        res.render("./../views/index.ejs");
      }
    } else {
      return res.render("users/login", { errors: errors.errors });
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
