import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { LoginRoutingModule } from './login-routing.module';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';


@NgModule({
  declarations: [
    IniciarSesionComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
