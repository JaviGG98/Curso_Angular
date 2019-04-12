var serie = /** @class */ (function () {
    function serie(nomSerie, nCapitulos) {
        this.nomSerie = nomSerie;
        this.nCapitulos = nCapitulos;
    }
    serie.prototype.getSerie = function () {
        return this.nomSerie;
    };
    serie.prototype.getNumberCaps = function () {
        return this.nCapitulos;
    };
    serie.prototype.setSerie = function (nomSerie) {
        return this.nomSerie = nomSerie;
    };
    serie.prototype.setNumberCaps = function (nCapitulos) {
        return this.nCapitulos = nCapitulos;
    };
    return serie;
}());
var arraySeries = [];
function recogeSerie() {
    var nombreSerie = document.getElementById("nameSerie");
    var numeroCapitulos = document.getElementById("nCaps");
    var objSerie = new serie(nombreSerie.value, parseInt(numeroCapitulos.value));
    arraySeries.push(objSerie);
    var nombreSerie = document.getElementById("nameSerie").value;
    "";
    var numeroCapitulos = document.getElementById("nCaps").value;
    "";
    /*console.log(objSerie.getSerie());
     console.log(objSerie.getNumberCaps())*/
}
{
    var ul_1 = document.createElement("ul");
    var li_1;
    var textSerie_1;
    if () {
        arraySeries.forEach(function (serie) {
            li_1 = document.createElement("li");
            textSerie_1 = document.createTextNode(arraySeries[i].getSerie());
            li_1.appendChild(textSerie_1);
            ul_1.appendChild(li_1);
        });
        var divContainer = document.getElementById("container");
        divContainer.appendChild(ul_1);
    }
}
window.onload = function () {
    var modo = document.getElementById("modo");
    var boton = document.getElementById("boton");
    boton.addEventListener("click", recogeSerie);
    modo.addEventListener("change", escribeSerie);
};
