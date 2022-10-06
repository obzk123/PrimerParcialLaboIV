import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Servicios/producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(public ServicioProducto:ProductoService) { }

  ngOnInit(): void {
  }

}
