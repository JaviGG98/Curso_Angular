'use strict';
//pedir dos numeros compararlos y ver que numeros hay entre ellos
//cuantos impares y cuantos pares
//suma total de todos los numeros que hay entre val1 y val2
let val1 = parseInt(prompt("introduce un numero"));
let val2 = parseInt(prompt("introduce otro numero"));
let mayor=0;
let menor=0;
let pares = 0;
let impares = 0;
let sum=0;
//mostrar que numeros hay entre los dos valores
if(val1 >= val2)
{
    mayor = val1;
    menor = val2;
}
else
{
    mayor = val2;
    menor = val1;
}
for(let i=menor; i<=mayor; i++)
{
    console.log(i);
    if(i%2==0)
    {
        pares++;
    }
    else
    {
        impares++;
    }
    sum=sum+i;
}
document.write("<p>Hay "+pares+" numeros pares</p>");
document.write("<p>Hay "+impares+" numeros impares</p>");
alert("El total es: "+sum);