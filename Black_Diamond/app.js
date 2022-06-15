const express = require("express");
const app = express();
const path = require("path");
const rutasMain = require('./routes/main.js');
//const rutasUsers = require('./routes/users.js');
//const rutasProduct = require('./routes/product.js');
app.listen(process.env.PORT || 3001, function() {
console.log('Servidor corriendo en el puerto 3001')
});

app.use(express.static("public"));
app.set('view engine', 'ejs')

app.use('/', rutasMain)
