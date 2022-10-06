import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/Entidades/pais';
import { Producto } from 'src/app/Entidades/producto';
import { ProductoService } from 'src/app/Servicios/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  public producto:Producto;
  constructor(private route:Router, private productosService:ProductoService) { 
    this.producto = new Producto();
  }

  ngOnInit(): void {
    console.log(this.productosService.productos);
  }

  ObtenerPais(pais:Pais)
  {
    this.producto.pais = pais;
  }

  RegistrarProducto()
  {
    this.productosService.productos.push(this.producto);
    this.route.navigate(['/productos']);
    console.log(this.productosService.productos);
  }

}
