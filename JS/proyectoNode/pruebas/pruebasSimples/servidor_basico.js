const http = require("http");

// var atenderPeticion = (request, Response) => {
//     Response.writeHead(200, { "Content-Type": "text/plain" });
//     Response.write("Bienvenido/a");
//     Response.end();
//}

var atenderPeticion = (request, response) => {
    response.writeHead(200, {
        "Content-Type":
            "text/plain"
    });
    let navegador = request.headers['user-agent'];
    if (navegador.indexOf("Chrome")>=0 ) {
        response.write("utilizas Google Chrome");
    }
    else {
        response.write("Utilizas un navegador no reconocido\n" + navegador);
        response.end();
    }
    response.end();
}

http.createServer(atenderPeticion).listen(8080);