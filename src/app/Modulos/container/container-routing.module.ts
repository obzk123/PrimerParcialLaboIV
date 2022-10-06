import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContainerComponent } from './componentes/listar-container/listar-container.component';

const routes: Routes = [
  {path:'listado', component:ListarContainerComponent},
  {path:'', redirectTo: '/container/listado', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
