export class Pais {
    public nombre:string;
    public capital:string;
    public imagen:string;


    constructor()
    {
        this.nombre = '';
        this.capital = '';
        this.imagen = '';
    }


    public static AgregarPais(nombre:string, capital:string, imagen:string) : Pais
    {
        let nuevoPais = new Pais();
        nuevoPais.nombre = nombre;
        nuevoPais.capital = capital,
        nuevoPais.imagen = imagen;
        return nuevoPais;
    }
}
