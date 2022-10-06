import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Entidades/producto';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public producto:Producto;
  constructor(private router:Router, private auth:AuthService) { 
    this.producto = new Producto();
  }

  ngOnInit(): void {
  }

  ObtenerProducto(producto:Producto)
  {
    this.producto = producto;
  }

  async CerrarSesion()
  {
    await this.auth.CerrarSesion();
    this.router.navigate(['/login']);
  }

}
