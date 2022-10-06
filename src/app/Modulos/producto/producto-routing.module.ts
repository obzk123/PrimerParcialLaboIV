import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'alta', component:AltaProductoComponent},
  {path:'', redirectTo: '/productos/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
