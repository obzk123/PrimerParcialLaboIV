import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { ProductoRoutingModule } from './producto-routing.module';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';


@NgModule({
  declarations: [
    AltaProductoComponent,
    ListadoPaisesComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule
  ]
})
export class ProductoModule { }
