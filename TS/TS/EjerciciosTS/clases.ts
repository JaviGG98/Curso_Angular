class Programa
{
    private nombre: string;
    private version: number;

    constructor(nombre:string, version:number)
    {
        this.nombre=nombre;
        this.version=version;
    }
    
    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        return this.nombre=nombre;
    }

    getVersion(){
        return this.version;
    }

    setVersion(version:number){
        this.version=version;
    }

}

class EditorVideo extends Programa{
    public timeline:number;

    constructor(timeline:number, name:string, version:number)
    {
        super(name, version);
        this.timeline=timeline;
    }
   
    setTimeLine(timeline:number){
        this.timeline=timeline;
    }

    getTimeLine(){
        return this.timeline;
    }

    getAllData():String{
        return this.getNombre+" - "+this.getVersion()+" "+this.getTimeLine();
    }

}

var editor = new EditorVideo(4000,"Camtasia studio",8);
/*editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeLine(4000);*/

console.log(editor.getAllData());

var programas:Programa[] = [];

function guardar()
{
    var nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value.toString();


    var programa=new Programa(nombre,8);

    programas.push(programa);

    var list="";

    for (let i=0; i<programas.length; i++)
    {
        list = list +"<li>"+programas[i].getNombre()+"</li>";
    }
    var listado=(<HTMLElement>document.getElementById("listado"));
    listado.innerHTML=list;
}

window.onload  = function(){
    var boton = (<HTMLInputElement>document.getElementById("boton"));
    boton.addEventListener("click",guardar);
}
