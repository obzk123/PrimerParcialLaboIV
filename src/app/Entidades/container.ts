export class Container {
    public codigo:number;
    public color:string;
    public empresa:string;
    public capacidad:number;

    constructor()
    {
        this.codigo = 0;
        this.color = '';
        this.empresa = '';
        this.capacidad = 0;
    }


    public static AgregarContainer(codigo:number, color:string, empresa:string, capacidad:number) : Container
    {
        let nuevoContainer = new Container();
        nuevoContainer.codigo = codigo;
        nuevoContainer.color = color,
        nuevoContainer.empresa = empresa;
        nuevoContainer.capacidad = capacidad;
        return nuevoContainer;
    }
}
