const express = require("express");
const app = express();
const path = require("path");

app.listen(3001, () =>
console.log('Servidor corriendo en el puerto 3001')
);

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
});
app.get('/cart.html', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/cart.html"))
});
app.get('/productdetail', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/productdetail.html"))
});