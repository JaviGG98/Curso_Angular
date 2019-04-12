class serie 
{
    private nomSerie:string;
    private nCapitulos:number;

    constructor(nomSerie:string, nCapitulos:number) 
    {
        this.nomSerie = nomSerie;
        this.nCapitulos = nCapitulos;
    }

    getSerie()
    {
        return this.nomSerie;
    }
    getNumberCaps()
    {
        return this.nCapitulos;
    }
    setSerie(nomSerie:string)
    {
        return this.nomSerie = nomSerie;
    }
    setNumberCaps(nCapitulos:number)
    {
        return this.nCapitulos = nCapitulos;
    }

}

var arraySeries:serie[] = [];
function recogeSerie()
{
    var nombreSerie:string =(<HTMLInputElement>document.getElementById("nameSerie")).value.toString();
    var numeroCapitulos:number=parseInt((<HTMLInputElement>document.getElementById("nCaps")).value.toString());
    var serie=new serie
function escribeSerie(nombreSerie,numeroCapitulos);
{

}

window.onload = function()
{
        var modo = <HTMLInputElement>document.getElementById("modo");
        var boton = <HTMLInputElement>document.getElementById("boton");
        boton.addEventListener("click",recogeSerie);
        modo.addEventListener("change",escribeSerie);
}