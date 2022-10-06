import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  public usuario:Usuario;
  constructor(private https:HttpClient) { 
    this.usuario = new Usuario();

    this.ObtenerDatosGithub();
  }

  ngOnInit(): void {
  }


  async ObtenerDatosGithub()
  {
    await this.https.get('https://api.github.com/users/obzk123').forEach((datos:any)=>
    {
      this.usuario.id  = datos['id'];
      this.usuario.name = datos['name'];
      this.usuario.username = datos['login'];
      this.usuario.email = datos['email'];
      this.usuario.src = datos['avatar_url'];
    });
  }

}
