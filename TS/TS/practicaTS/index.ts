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
    var nombreSerie = <HTMLInputElement>document.getElementById("nameSerie");
    var numeroCapitulos=<HTMLInputElement>document.getElementById("nCaps");
    var objSerie=new serie (nombreSerie.value,parseInt(numeroCapitulos.value));
    arraySeries.push(objSerie);
    var nombreSerie = <HTMLInputElement>document.getElementById("nameSerie").value="";
    var numeroCapitulos=<HTMLInputElement>document.getElementById("nCaps").value="";
   /*console.log(objSerie.getSerie());
    console.log(objSerie.getNumberCaps())*/
}
function escribeSerie();
{
    
    let ul = document.createElement("ul"); 
    
    let li:HTMLElement;
    let textSerie:any;
    if () {
        arraySeries.forEach(serie => {
            li = document.createElement("li");
            textSerie = document.createTextNode(arraySeries[i].getSerie());
            li.appendChild(textSerie);  
            ul.appendChild(li); 
        });
        let divContainer = document.getElementById("container");
        divContainer.appendChild(ul);
    }
    
   


}

window.onload = function()
{
        var modo=<HTMLInputElement>document.getElementById("modo");
        var boton=<HTMLInputElement>document.getElementById("boton");
        boton.addEventListener("click",recogeSerie);
        modo.addEventListener("change",escribeSerie);
}