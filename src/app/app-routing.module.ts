import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './Componentes/bienvenida/bienvenida.component';
import { UsuarioLoginGuard } from './Guards/usuario-login.guard';

const routes: Routes = [
  {path:'bienvenida', component:BienvenidaComponent},
  {path:'login',  loadChildren: () => import('./Modulos/login/login.module').then(m => m.LoginModule)},
  {path:'productos',  loadChildren: () => import('./Modulos/producto/producto.module').then(m => m.ProductoModule), canActivate:[UsuarioLoginGuard]},
  {path:'publico',  loadChildren: () => import('./Modulos/publico/publico.module').then(m => m.PublicoModule)},
  {path:'', redirectTo: '/bienvenida', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
