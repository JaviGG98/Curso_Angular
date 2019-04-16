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
        catch (e){
            return[];
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
    var libros = cargarLibros();
    let librosFiltrados =
        libros.filter((libro) => libro.id != id);
    if (librosFiltrados.length !== libros.length)
        guardarLibros(librosFiltrados);
    return librosFiltrados.length !== libros.length;
};

router.get('/',(req, res) =>{
    cargarLibros().then(resultado => {
        res.send(resultado);
    }).catch(error => {
        res.send(error);
    });
});

router.get('/:id',(req, res) => {
    buscarLibroPorId().then(resultado => {
        if(resultado){
            res.send({error: false, resultado: resultado});
        }     
        else{
             res.send({error:true, mensajeError:"error buscando libro "});
        }    
    }).catch(error => {
        res.send({error:true, mensajeError:"error buscando libro " + error});
    });
});


module.exports = {
    listarLibros: cargarLibros,
    nuevoLibro: nuevoLibro,
    borrarLibro: borrarLibro
};

let app = express();
app.use((req, res, next) => {
    console.log(new Date().toString(), ":", req.method, req.url);
    next();
});
app.use(bodyParser.json());
app.use('/libros', libros);

app.listen(8080);