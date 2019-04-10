function addParrafo(){

	var padre = document.getElementById("respuesta");
	let newParrafo = document.createElement("p");
	let nParaf =padre.childNodes.length;
	let newText = document.createTextNode("Parrafo "+(nParaf-2));
	newParrafo.appendChild(newText);
	padre.insertBefore(newParrafo,padre.childNodes[nParaf-1]);
	newParrafo.addEventListener("click",eliminar);
}
function eliminar(){
	var padre = document.getElementById("respuesta");
	padre.removeChild(this);
	miFormulario.btn_lanzar.style.display = "block";
}
function lanzar() {
	miFormulario.btn_lanzar.style.display = "none";
	//recoger el valor del los input del formulario
	let tituloPagina = miFormulario.titulo.value;
	let numP = miFormulario.numero.value;

	//cojo el padre para escribir en el después
	var padre = document.getElementById("respuesta");

	//creo el h1 y el contenido del h1
	let titulin = document.createElement("h1");
	let textoTitulo = document.createTextNode(tituloPagina);

	//meto el texto dentro del h1 y después lo escribo en el padre
	titulin.appendChild(textoTitulo);
	padre.appendChild(titulin);

	//creo el for donde voy a escribir n parrafos que indique el usuario
	for (let i = 1; i <= numP; i++) {
		let paraf = document.createElement("p");
		let parafText = document.createTextNode("parrafo " + i);
		paraf.appendChild(parafText);
		padre.appendChild(paraf);
		paraf.addEventListener("click",eliminar);
	}
	//creacion del boton para añadir más parrafos
	let inputButton = document.createElement("input");
	padre.appendChild(inputButton);	

	//cojo el boton y le añado los atributos
	let btnAñadir = padre.getElementsByTagName("input")[0];
	btnAñadir.setAttribute("type","button");
	btnAñadir.setAttribute("name","btn_añadir");
	btnAñadir.setAttribute("value","Añadir");

	//creo un evento inputButton.addEventListener("click",addParrafo);para cuando le de click ejecute la funcion addParrafo
	inputButton.addEventListener("click",addParrafo);
}
// function validar()
// {}
window.onload = function () {

	miFormulario.btn_lanzar.style.display = "block";
	miFormulario.btn_lanzar.onclick = lanzar;

}
