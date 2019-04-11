const os = require("os");

const loginUsuario = os.userInfo();

let cadena = loginUsuario.username
function esUsuario(cadena) {
    if(cadena == loginUsuario.username)
    {
        return true;
    }
    else
    {
        return false;
    }
}
module.exports = {
    loginUsuario:loginUsuario,
    cadena:cadena,
    esUsuario:esUsuario
};