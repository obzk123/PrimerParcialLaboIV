import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

import { PublicoRoutingModule } from './publico-routing.module';
import { ListadoComponent } from './componentes/listado/listado.component';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    PublicoRoutingModule,
    FormsModule
  ]
})
export class PublicoModule { }
