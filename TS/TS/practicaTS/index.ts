let nomSerie =document.getElementsByName("nameSerie");
let nCapitulos = document.getElementsByName("nCaps");
class serie {
     
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
