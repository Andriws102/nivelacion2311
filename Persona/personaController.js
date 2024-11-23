const personaModel = require("./personaModel");

const guardarPersona = (request, response) => {
    const persona = request.body;
    personaModel.guardarPersona(persona.nombre, persona.apellido, persona.email,persona.edad,persona.fecha,
        (error, result) => {
            if(error) {
                return response.status(500).json({ message: "Error al registrar persona "});
            }
            return response.status(201).json({ message: "Persona registrada existosamente"});
        }
    );
};

module.exports = {
    guardarPersona
}