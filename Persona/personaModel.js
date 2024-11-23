const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nivelacion"
});

const guardarPersona = (nombre, apellido, email, edad, fecha, callback) => {
    connection.query(
        `INSERT INTO PERSONA(nombre,apellido,email,edad,fecha) 
        VALUES ('${nombre}','${apellido}','${email}','${edad}','${fecha}')`,
        (err, result) => {
            if(err){
                callback(err);
            }else{
                callback(null, result);
            }
        }
    );
};

module.exports = {
    guardarPersona
}