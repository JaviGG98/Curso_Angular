const os = require('os');
const user = os.userInfo();

console.log("hola,",user.username + " tu directorio es el siguiente: "+user.homedir);