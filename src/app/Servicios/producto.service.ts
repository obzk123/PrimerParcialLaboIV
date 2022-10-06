import { Injectable } from '@angular/core';
import { Producto } from '../Entidades/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public productos:Array<Producto>;
  constructor() { 
    this.productos = new Array<Producto>();
  }
}
