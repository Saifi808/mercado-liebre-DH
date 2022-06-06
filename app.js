const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3312;

app.listen(port, () => console.log("Running on  port 3312"))

app.use(express.static(path.join(__dirname, "./public")))

app.get ("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"))
})
app.get ("/ayuda", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/ayuda.html"))
})
app.get ("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})
app.get ("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})
app.get ("/compraslist", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/compraslist.html"))
})
app.get ("/ofertas", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/ofertas.html"))
})
app.get ("/tiendasoficiales", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/tiendasoficiales.html"))
})
app.get ("/vender", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/vender.html"))
})

