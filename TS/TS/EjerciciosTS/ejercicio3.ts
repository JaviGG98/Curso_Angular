class rombo {
    private diagonalVertical: number;
    private diagonalHorizontal: number;

    constructor(diagonalVertical:number, diagonalHorizontal:number) 
    {
       this.diagonalVertical=diagonalVertical;
       this.diagonalHorizontal=diagonalHorizontal; 
    }

    getVertical()
    {
        return this.diagonalVertical;
    }
    getHorizontal()
    {
        return this.diagonalHorizontal;
    }
    setVertical(diagonalVertical:number)
    {
        return this.diagonalVertical=diagonalVertical;
    }
    setHorizontal(diagonalHorizontal:number)
    {
        return this.diagonalHorizontal=diagonalHorizontal
    }    
    calcular()
    {
        return this.diagonalVertical*this.diagonalHorizontal;
    }
}