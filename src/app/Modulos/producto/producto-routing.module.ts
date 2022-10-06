import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';


const routes: Routes = [
  {path:'alta', component:AltaProductoComponent},
  {path:'', redirectTo: '/productos/alta', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
