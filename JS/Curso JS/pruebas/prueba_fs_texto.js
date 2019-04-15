const fs = require('fs');
const archivo = "datos.txt";
const archivo2 = "datos2.txt";
const textoPredefinido = "En un lugar de la mancha\n"+
"de cuyo nombre no quiero acordarme";

let guardarDatos = () => {
fs.writeFileSync(archivo, textoPredefinido);
};
let leerDatos = () => {
return fs.readFileSync(archivo, 'utf-8');
};

guardarDatos();
console.log("Texto del fichero:");
console.log(leerDatos());

guardarDatos = () => {
    fs.writeFileSync(archivo2, JSON.stringify(textoPredefinido));
};
