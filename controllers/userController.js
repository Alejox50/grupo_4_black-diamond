const path = require("path");

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
    }
};

module.exports = userController;