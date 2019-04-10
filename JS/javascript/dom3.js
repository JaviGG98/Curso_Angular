'use strict';

var divEncabezado = document.getElementById("encabezadoFactura");
divEncabezado.classList.remove("encabezado");
divEncabezado.classList.add("resalta");

function incremento() 
{
   let num = divEncabezado.getElementsByTagName("label")[2].innerHTML;
   let total = parseInt(num)+1; 
   divEncabezado.getElementsByTagName("label")[2].innerHTML = total;  
   console.log(total); 
}
incremento();