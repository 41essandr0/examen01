function verificar() {
    const nombre = document.getElementById("name").value;
    const edad = document.getElementById("age").value;
    if (nombre == "") {
        console.log("Error al guardar")
    } else if (edad == "") {
        console.log("Error al guardar")
    }
}