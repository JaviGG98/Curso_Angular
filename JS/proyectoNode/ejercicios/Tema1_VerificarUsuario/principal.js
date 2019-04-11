const utilidades = require("./utilidades_os.js");

if (utilidades.esUsuario('nacho')) {
    console.log("Hola "+ utilidades.cadena);
}
else
{
    console.log("No eres el usuario");
}