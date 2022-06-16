const path = require("path");
let mainController = {
    home: function(req, res) {
        res.render('index')
    }

};

module.exports = mainController;