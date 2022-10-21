const express = require("express");
const app = express();
const path = require("path");
const rutasMain = require('./routes/main.js');
const rutasUser = require('./routes/userRoutes');
const rutasProduct = require('./routes/product.js');
const session = require('express-session');
const db = require('./database/models/index')
app.use(session({secret: 'Shh, es un secreto'}))


app.use(express.urlencoded({ extended: false }));

app.use(express.json());


app.use(express.static("./public"));
app.set('view engine', 'ejs')

app.use("/", rutasMain);
app.use("/", rutasUser);
app.use("/", rutasProduct);

db.sequelize.sync({force: true}).then(() => {
    console.log('conectando')
})

app.listen(process.env.PORT || 3001, function() {
    console.log('Servidor corriendo en el puerto 3001')
});
