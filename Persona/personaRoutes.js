const express = require("express");
const router = express.Router();
const personaController = require("./personaController");

router.post("/guardar", personaController.guardarPersona);

module.exports = router;