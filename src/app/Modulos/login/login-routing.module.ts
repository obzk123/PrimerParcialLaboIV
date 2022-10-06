import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo: '/login/iniciar-sesion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
