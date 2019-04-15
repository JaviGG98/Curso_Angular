const fs = require('fs');

const archivo = 'videojuegos.json';

let cargarJuegos = () => {
    try {
        return JSON.parse(fs.readFileSync(archivo, 'utf8'));
    } catch (e) {
        return [];
    }
};
let guardarJuegos = (juegos) => {
    fs.writeFileSync(archivo, JSON.stringify(juegos));
};

let buscarJuegoPorAnno = (anno) => {
    let juegos = cargarJuegos('videojuegos.json');
    let resultado = juegos.filter((juego) => juego.anno === anno);
    if (resultado.length > 0)
        return resultado;
};

let buscarJuegoPorCategoria = (categoria) => {
    let juegos = cargarJuegos('videojuegos.json');
    let resultado = juegos.filter((juego) => juego.categoria === categoria);
    if(resultado.length > 0)
        return resultado;
}


let nuevoJuego = (id, titulo, fabricante, categoria, anno) => {
    if (!buscarJuegoPorId(id)) {
        let juegos = cargarJuegos();
        let nuevo = {
            id: id,
            titulo: titulo,
            fabricante: fabricante,
            categoria: categoria,
            anno : anno
            
        };
        juegos.push(nuevo);
        guardarJuegos(juegos);
        return true;
    }
};

let borrarJuego = (id) => {
    let juegos = cargarJuegos('videojuegos.json');
    let juegosFiltrados = juegos.filter((juego) => juego.id != id);
    if (juegosFiltrados.length !== juegos.length)
        guardarJuegos(juegosFiltrados);
    return juegosFiltrados.length !== juegos.length;
};


module.exports = {
    listarJuegos: cargarJuegos,
    nuevoJuego: nuevoJuego,
    borrarJuego: borrarJuego,
    buscarJuegoPorAnno : buscarJuegoPorAnno,
    buscarJuegoPorCategoria : buscarJuegoPorCategoria
};