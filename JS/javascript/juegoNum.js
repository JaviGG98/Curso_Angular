'use strict';

let num1, num2, bueno
let veces=0, aciertos=0, fallos=0;
let pregunta, lista, terminado=false;
function juego() {
    pregunta = document.getElementById("#pregunta");
    lista.forEach(function(elem){elem.style.backgroundColor = 'transparent'});
    
    bueno = Math.floor(Math.random()*3);
    num1 = Math.floor((Math.random()*10)+1);
    num2 = Math.floor((Math.random()*10)+1);

    pregunta.innerHTML = "<p>¿Cuánto es " + num1 + " X " + num2 + " ?</p>";

    
    
    let t;
    let btn;
    for(let i = 0; i < 3; i++){
        btn=document.createElement("button");
        if(i)
    }
    
}

function comprobar() {

    
}