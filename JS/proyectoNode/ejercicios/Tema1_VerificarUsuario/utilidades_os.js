
const os = require("os");
const loginUsuario = os.userInfo().username;

let cadena = loginUsuario.username
let esUsuario = (login) => login === this.loginUsuario
module.exports = {
    loginUsuario:loginUsuario,
    esUsuario:esUsuario
};