//Módulos

const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const admin = require("./routes/admin.js")

// const mongoose = require("mongoose")

// configurações
// bodyparser - deprecado 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// handlebars

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// rotas

app.use("/admin", admin);

// outros
const PORT = 8081;

app.listen(PORT, () => {
    console.log("Servidor rodando.");
})
