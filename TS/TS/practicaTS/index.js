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
    var nombreSerie = document.getElementById("nameSerie").value.toString();
    var numeroCapitulos = parseInt(document.getElementById("nCaps").value.toString());
    var serie = new serie;
    {
    }
    window.onload = function () {
        var modo = document.getElementById("modo");
        var boton = document.getElementById("boton");
        boton.addEventListener("click", recogeSerie);
        modo.addEventListener("change", escribeSerie);
    };
}
