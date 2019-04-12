class Usuario
{
    private name:string;

    public email:string;

    protected age:number;
    /*Siempre cuando hagamos una clase declarar un get y un set*/

    constructor(name:string, email:string, age:number)
    {
        this.name=name;
        this.email=email;
        this.age=age;
    }
    
    setName(name:string)
    {
        this.name = name;
    }

    dameNombre()
    {
        return this.name;
    }
    register()
    {
        console.log(this.name+" registrado")
    }
    public AgeInYears()
    {

    }

    payInVoice
}