import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Container } from 'src/app/Entidades/container';
import { ContainerService } from 'src/app/Servicios/container.service';

@Component({
  selector: 'app-eliminar-container',
  templateUrl: './eliminar-container.component.html',
  styleUrls: ['./eliminar-container.component.css']
})
export class EliminarContainerComponent implements OnInit {

  @Input() container:Container;
  @Output() enviarEvento:EventEmitter<string>;
  constructor(private servicioContainer:ContainerService) { 
    this.container = new Container();
    this.enviarEvento = new EventEmitter<string>()
    
  }

  ngOnInit(): void {
  }

  EnviarEvento()
  {
    for(let i = 0; i < this.servicioContainer.containers.length; i++)
    {
      if(this.servicioContainer.containers[i].codigo == this.container.codigo)
      {
        this.servicioContainer.containers.splice(i, 1);
        break;
      }
    }
    this.enviarEvento.emit("listar")
  }

}
