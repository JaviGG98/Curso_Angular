const http = require('http');
const fs = require('fs');
const os = require("os");
const link = require("url");

var atenderPeticion = (request,response) => 
{
    var user = os.hostname();
    var fichero = os.homedir();
    if (request.url == '/') 
    {
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.readFileSync('./index.html','utf-8');
    }
    else if (request.url == './usuario')
    {
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write(user);

    }
    else if (request.url == './carpeta')
    {
        response.writeHead(200,{'Content-Type':'text/plain'});
        fs.readdirSync('.').foreach(fichero  => {response.write(fichero + "\n")});
    }
    else if(request.url !='/' | request.url != './carpeta' )
    {
        response.writeHead(200,{'Content-Type':'image/png'});
        fs.readFileSync("./5108.png_860.png");
    }
    else if(request.url.starsWith('/saludo'))
    {
        response.writeHead(200,{'Content-Type':'text/plain'});
        var partes = request.url.split('/');
        var nombre = partes[2];
        var edad = partes[3];
        response.write("Hola, "+nombre+" tienes "+edad+" años")
        if (edad < 18)
        {
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write("Eres menor de edad");
        }
        else
        {
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write("Eres mayor de edad");
        }
    }
    response.end();
}

http.createServer(atenderPeticion).listen(8080);