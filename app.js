const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const rutasUser = require('./routes/userRoutes');
const rutasProduct = require('./routes/product.js');
const session = require('express-session');
const db = require('./database/models/index')



app.use(express.urlencoded({ extended: false }));

app.use(express.json());



app.use(bodyParser.json());
app.use("/", rutasUser);
app.use("/", rutasProduct);

db.sequelize.sync({force: true}).then(() => {
    console.log('conectando')
});

app.listen(process.env.PORT || 3001, function() {
    console.log('Servidor corriendo en el puerto 3001')
});
