const express = require("express");
const app = express();
const path = require("path");
const rutasMain = require('./routes/main.js');
const rutasUser = require('./routes/userRoutes.js');
const rutasProduct = require('./routes/product.js');
const session = require('express-session');

app.use(session({secret: 'Shh, es un secreto'}))

app.listen(process.env.PORT || 3001, function() {
console.log('Servidor corriendo en el puerto 3001')
});
app.use(express.urlencoded({ extended: false }));

app.use(express.json());


app.use(express.static("./public"));
app.set('view engine', 'ejs')

app.use("/",rutasUser, rutasProduct, rutasMain)
