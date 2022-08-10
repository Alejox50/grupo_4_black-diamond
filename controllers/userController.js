const { validationResult } = require("express-validator");
const path = require("path");
const User = require ('../models/User')
let userController = {
    
    
    login: function(req, res) {
        res.render('./users/login')
    },
    
    
    register: function(req, res) {
        res.render('./users/register')
    },
    
    
    processLogin: function(req,res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync('users.json', { encoding: utf-8})
            let users;
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);            
            }

            for(let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password,users[i].password )){
                        let usuarioALoguearse = users[i];
                        break;

                    }
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.render('login', {errors: [
                    {msg: 'Credenciales Invalidas'}
                ]})
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            res.render('success');
        }else{
            return res.render('login', {errors: errors.errors})
        }
    },
   
   
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
        return res.render('./users/register', {
            errors: resultValidation.mapped(),
            oldData:req.body
        });
    }
    User.create(req.body);
    return res.send('Ok, se guardo el usuario');
}
}

module.exports = userController;