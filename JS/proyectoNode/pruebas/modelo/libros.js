const fs = require('fs');
const archivo = 'libros.json';
let cargarLibros = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(fs.readFileSync(archivo, 'UTF8')));
        }
        catch{
            error;
        }
    });

};
let guardarLibros = (libros) => {
    fs.writeFileSync(archivo, JSON.stringify(libros));
};

let buscarLibroPorId = id => {
    return new Promise((resolve, reject) => {
        cargarLibros().then(libros => {
            let resultado = libros.filter(libro => libro.id == id);
            if (resultado.length > 0) {
                resolve(resultado[0])
            }
            else{
                reject("el libro ya existe")
            }
        });
    });

};

let nuevoLibro = (id, titulo, autor, precio) => {
    if (!buscarLibroPorId(id)) {
        let libros = cargarLibros();
        let nuevo = {
            id: id,
            titulo: titulo,
            autor: autor,
            precio: precio
        };
        libros.push(nuevo);
        guardarLibros(libros);
        return true;
    }
};

let borrarLibro = (id) => {
    let libros = cargarLibros();
    let librosFiltrados =
        libros.filter((libro) => libro.id != id);
    if (librosFiltrados.length !== libros.length)
        guardarLibros(librosFiltrados);
    return librosFiltrados.length !== libros.length;
};

module.exports = {
    listarLibros: cargarLibros,
    nuevoLibro: nuevoLibro,
    borrarLibro: borrarLibro
};