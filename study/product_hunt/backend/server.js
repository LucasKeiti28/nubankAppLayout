const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Inciando o App, instanciando as propriedades de lidar com a rota do Express.
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando a conexao com o DB Mongo.
mongoose.connect(
  "mongodb+srv://lucas:lucas12345678@cluster0-ax3gp.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.connection;
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3000);
