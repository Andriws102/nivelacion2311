document.addEventListener("DOMContentLoaded", () => {
    const guardar = document.getElementById("guardar");

    const guardarPersona = () => {
        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        const date = document.getElementById("date").value;
        const result = document.getElementById("result");

        fetch("http://localhost:3001/persona/guardar", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                nombre: name,
                apellido: lastname,
                email: email,
                edad: age,
                fecha: date
            })
        }).then(response => response.json())
        .then(json => {
            result.value = json.message;
        });
    };

    if(guardar){
        guardar.addEventListener("click", guardarPersona);
    }
});