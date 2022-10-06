import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './Componentes/bienvenida/bienvenida.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { PaisService } from './Servicios/pais.service';
import { ProductoService } from './Servicios/producto.service';
import { HomeComponent } from './Componentes/home/home.component';
import { ContainerService } from './Servicios/container.service';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private servicioPaises:PaisService, private servicioProductos:ProductoService, private containerService:ContainerService){}
}

