const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const rutasUser = require('./routes/userRoutes');
const rutasProduct = require('./routes/product.js');
const db = require('./database/models/index')
const save = require('./database/setup');
const cors = require('cors')


app.use(express.urlencoded({ extended: false }));

app.use(express.json());

var corsOptions = {
    origin: ['http://localhost:3000','*'],
}

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use("/", rutasUser);
app.use("/", rutasProduct);

db.sequelize.sync({force: true}).then(async() => {
    console.log('conectando')
    await save();
});



app.listen(process.env.PORT || 3001, function() {
    console.log('Servidor corriendo en el puerto 3001')
});
