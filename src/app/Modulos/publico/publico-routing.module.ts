import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';

const routes: Routes = [
  {path:'listado', component:ListadoComponent},
  {path:'', redirectTo:'/publico/listado', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
