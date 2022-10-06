import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { ProductoRoutingModule } from './producto-routing.module';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoProductosComponent } from './componentes/listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';


@NgModule({
  declarations: [
    AltaProductoComponent,
    ListadoPaisesComponent,
    HomeComponent,
    ListadoProductosComponent,
    DetalleProductoComponent,
    DetallePaisComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule
  ]
})
export class ProductoModule { }
