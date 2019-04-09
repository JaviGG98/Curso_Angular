'use strict'
let num = parseInt(prompt("Introduce un numero"));

let ar = new Array();
for (let i = 1; i <= num; i++) {
    ar.push(i);
}
ar.push(num);
ar.shift();
console.log(ar.filter(num => num%2==0));
console.log(ar.map(num => num*2));
