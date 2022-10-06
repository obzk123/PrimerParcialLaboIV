import { Injectable } from '@angular/core';
import { Pais } from '../Entidades/pais';
import { HttpClient } from '@angular/common/http';
import { ProductoService } from './producto.service';
import { Producto } from '../Entidades/producto';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  public paises:Array<Pais>;
  constructor(private https:HttpClient, private ServicioProductos:ProductoService) { 
    this.paises = new Array<Pais>();
    this.CargarPaises();
  }


  async CargarPaises()
  {
    await this.https.get('https://restcountries.com/v3.1/all').forEach( (paises:any)=>
    {
      paises.map( (pais:any) =>
      {
        let paisAux = new Pais();
        paisAux.nombre = pais['name']['common'];
        paisAux.capital = pais['capital'];
        paisAux.imagen = pais['flags']['png'];
        this.paises.push(paisAux);
      });
    })

    this.ServicioProductos.productos.push(Producto.AgregarProducto(0, "Television", 8000, 14, this.paises[0], false));
    this.ServicioProductos.productos.push(Producto.AgregarProducto(1, "Consola", 12000, 15, this.paises[1], false));
    this.ServicioProductos.productos.push(Producto.AgregarProducto(2, "Pizza", 1000, 0, this.paises[2], true));
    this.ServicioProductos.productos.push(Producto.AgregarProducto(3, "Computadora", 25000, 20, this.paises[3], false));
  }
}
