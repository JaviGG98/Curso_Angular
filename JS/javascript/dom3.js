'use strict';

var divEncabezado = document.getElementById("encabezadoFactura");
divEncabezado.classList.remove("encabezado");
divEncabezado.classList.add("resalta");

function incremento() {
    // OTRAS FORMAS DE SACAR EL HIJO DEL DIV
    // --------------------------------------------------//
    // let hijo = document.getElementByClassName("numeroFactura")[0]; //
    // let hijo = divEncabezado.children[2]; //
    // ---------------------------------------------------//
    let num = divEncabezado.getElementsByTagName("label")[2].innerHTML;
    let total = parseInt(num) + 1; // hijo.innerHTML = hijo.innerHTML + 1;
    divEncabezado.getElementsByTagName("label")[2].innerHTML = total;
    console.log(total);
}
incremento();