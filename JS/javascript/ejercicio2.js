'use strict'
//pedir al usuario 2 numeros y el primer numero será el operador de la multiplicación y el segundo el número que deberá multiplicar

let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce otro numero"));
let mayor = 0;
let menor = 0;
if ((num1 > 10 || num1 < 1) || (num2 > 10 || num2 < 1)) {
    alert("ERROR el numero debe estar entre 1 y 10");
}
else {
    document.write("<table border='1px solid black'>");
    if (num1 >= num2) {
        mayor = num1;
        menor = num2;
    }
    else {
        mayor = num2;
        menor = num1;
    }
    for (let i = 1; i <= mayor; i++) {
        document.write("<tr>");
        document.write("<td>" + menor + "x" + i + "</td>");
        document.write("<td>=</td>");
        document.write("<td>" + (i * menor) + "</td>");
        document.write("</tr>")
    }
    document.write("</table>");
}