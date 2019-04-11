const utilidades = require("./utilidades_os.js");

if (utilidades.esUsuario('pepe')) {
    console.log("hola user");
}
else
{
    console.log("No eres el usuario");
}

console.log("el usuario correcto es: " + utilidades.loginUsuario);