import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  public username:string;
  public password:string;
  public error:boolean;

  constructor(private router:Router, private AuthService:AuthService) { 
    this.username = '';
    this.password = '';
    this.error = false;
  }

  ngOnInit(): void {
  }


  IniciarSesion()
  {
    this.AuthService.IniciarSesion(this.username, this.password).then(credencialesUsuario =>
      {
        this.router.navigate(['/productos']);
      }).catch(error=>
        {
          this.error = true;
          console.log(error);
        });
  }

  cargarUsuario(valor:any)
  {
    if(valor == 1)
    {
      this.username = "octavio_bill@hotmail.com"
      this.password = "123456";
    }
    else
    {
      this.username = "octaviobzk123@gmail.com"
      this.password = "123456";
    }
  }

}
