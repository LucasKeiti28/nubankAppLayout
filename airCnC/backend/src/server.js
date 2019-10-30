const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

io.on("connection", socket => {
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

mongoose.connect(
  "mongodb+srv://aircnc:aircnc@cluster0-ax3gp.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// req.query recebe as infos do query params. Para filtros, se usar o query params.
app.get("/users", (req, res) => {
  return res.json({ idade: req.query.idade });
});

// req.params recebe as infos do route params. Para deletar ou editar, se usa o route params.
app.delete("/users/:id", (req, res) => {
  return res.json({ id: req.params.id });
});

// Liberar acesso para consumir a api.
app.use(cors());

// req.body recebe as infos do body. Para criacao ou edicao, se usa o body.
app.use(express.json());

app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));

app.post("/user", (req, res) => {
  return res.json(req.body);
});

app.use(routes);

server.listen(3333);
