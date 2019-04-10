'use strict';

let titulo = document.querySelector("title").textContent;
console.log(titulo);

let world = document.querySelectorAll(("a[title$='world']"));

world.forEach(function(world){
    console.log(world.title);
});

