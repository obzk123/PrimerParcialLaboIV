import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/Entidades/container';
import { ContainerService } from 'src/app/Servicios/container.service';

@Component({
  selector: 'app-listar-container',
  templateUrl: './listar-container.component.html',
  styleUrls: ['./listar-container.component.css']
})
export class ListarContainerComponent implements OnInit {

  public vistaListar:boolean;
  public vistaAlta:boolean;
  public vistaModificar:boolean;
  public vistaEliminar:boolean;
  public containerSeleccionado:Container;
  constructor(public servicioContainer:ContainerService) { 
    this.containerSeleccionado = new Container();
    this.vistaListar = true;
    this.vistaAlta = false;
    this.vistaModificar = false;
    this.vistaEliminar = false;
  }

  ngOnInit(): void {
  }

  AltaContainer(nuevoContainer:Container)
  {
    this.servicioContainer.containers.push(nuevoContainer);
  }

  SeleccionarContainer(container:Container)
  {
    this.containerSeleccionado = container;
  }

  CambiarVista(valor:string)
  {
    switch(valor)
    {
      case 'listar':
        this.vistaListar = true;
        this.vistaAlta = false;
        this.vistaModificar = false;
        this.vistaEliminar = false;
        break;

      case 'alta':
        this.vistaListar = false;
        this.vistaAlta = true;
        this.vistaModificar = false;
        this.vistaEliminar = false;
        break;

      case 'modificar':
        this.vistaListar = false;
        this.vistaAlta = false;
        this.vistaModificar = true;
        this.vistaEliminar = false;
        break;

      case 'eliminar':
        this.vistaListar = false;
        this.vistaAlta = false;
        this.vistaModificar = false;
        this.vistaEliminar = true;
        break;
    }
  }
}
