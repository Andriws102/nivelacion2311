const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const personaRouter = require("./Persona/personaRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/persona", personaRouter);

const PORT = 3001;

app.listen(PORT, () => console.log("Servidor iniciado por el puerto " + PORT));