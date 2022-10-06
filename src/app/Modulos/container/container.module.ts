import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { ContainerRoutingModule } from './container-routing.module';
import { ListarContainerComponent } from './componentes/listar-container/listar-container.component';
import { AltaConteinerComponent } from './componentes/alta-conteiner/alta-conteiner.component';
import { ModificarContainerComponent } from './componentes/modificar-container/modificar-container.component';
import { EliminarContainerComponent } from './componentes/eliminar-container/eliminar-container.component';


@NgModule({
  declarations: [
    ListarContainerComponent,
    AltaConteinerComponent,
    ModificarContainerComponent,
    EliminarContainerComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    FormsModule
  ]
})
export class ContainerModule { }
