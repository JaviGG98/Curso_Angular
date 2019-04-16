const fs = require('fs');
const express = require('express');
const archivo = 'libros.json';
const bodyParser = require('body-parser');
let router = express.Router();
let libros;

let cargarLibros = () => {
    try {
        return JSON.parse(fs.readFileSync(archivo, 'UTF8'));
    }
    catch (e) {
        return [];
    }
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
            else {
                reject("el libro ya existe")
            }
        });
    });

};
let nuevoLibro = (id, titulo, autor, precio) => {
    return new Promise((resolve, reject) => {
        buscarLibroPorId(id).then(libros => {
            reject("el libro ya ha sido insertado");
        })
            .catch(nuevoLibro => {
                cargarLibros().then(resultado => {
                    let nuevo = { id: id, titulo: titulo, autor: autor, precio: precio };
                    libros.push(nuevo);
                    guardarLibros(resultado);
                    resolve("Nuevo libro insertado " + nuevoLibro);
                }).catch(error => {
                    reject("error" + error);
                });
            });

    });
}

let borrarLibro = (id) => {
    var libros = cargarLibros();
    let librosFiltrados =
        libros.filter((libro) => libro.id != id);
    if (librosFiltrados.length !== libros.length)
        guardarLibros(librosFiltrados);
    return librosFiltrados.length !== libros.length;
};

router.get('/', (req, res) => {
    cargarLibros().then(resultado => {
        res.send(resultado);
    }).catch(error => {
        res.send(error);
    });
});

router.get('/:id', (req, res) => {
    buscarLibroPorId().then(resultado => {
        if (resultado) {
            res.send({ error: false, resultado: resultado });
        }
        else {
            res.send({ error: true, mensajeError: "error buscando libro " });
        }
    }).catch(error => {
        res.send({ error: true, mensajeError: "error buscando libro " + error });
    });
});

router.post('/', (req, res) => {
    nuevoLibro(req.body.id, req.body.titulo, req.body.autor, req.body.precio).then(
        resultado => {
            res.send({ error: false, resultado: resultado });
        }).catch(error => {
            res.send({ error: true, mensajeError: "Error añadiendo libro" });
        });
});


// module.exports = {
//     listarLibros: cargarLibros,
//     nuevoLibro: nuevoLibro,
//     borrarLibro: borrarLibro
// };