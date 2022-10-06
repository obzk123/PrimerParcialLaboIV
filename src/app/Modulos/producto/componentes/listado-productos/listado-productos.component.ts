import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/Entidades/producto';
import { ProductoService } from 'src/app/Servicios/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  @Output() public producto:EventEmitter<Producto>;
  constructor(public ServicioProducto:ProductoService) { 
    this.producto = new EventEmitter<Producto>();
  }
  

  ngOnInit(): void {
  }

  EnviarProducto(producto:Producto)
  {
    this.producto.emit(producto);
  }


}
