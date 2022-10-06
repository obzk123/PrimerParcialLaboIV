import { Pais } from "./pais";

export class Producto {
    public codigo:number;
    public descripcion:string;
    public precio:number;
    public stock:number;
    public pais:Pais;
    public comestible:boolean;


    constructor()
    {
        this.codigo = 0;
        this.descripcion = '';
        this.precio = 0;
        this.stock = 0;
        this.pais = new Pais();
        this.comestible = false;
    }

    public static AgregarProducto(codigo:number, descripcion:string, precio:number, stock:number, pais:Pais, comestible:boolean) : Producto
    {
        let nuevoProducto = new Producto();
        nuevoProducto.codigo = codigo;
        nuevoProducto.descripcion = descripcion,
        nuevoProducto.precio = precio;
        nuevoProducto.stock = stock;
        nuevoProducto.pais = pais;
        nuevoProducto.comestible = comestible
        return nuevoProducto
    }
}
