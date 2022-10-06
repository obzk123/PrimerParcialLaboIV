import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/Entidades/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() unProducto:Producto;
  constructor() { 
    this.unProducto = new Producto();
  }

  ngOnInit(): void {
  }

}
