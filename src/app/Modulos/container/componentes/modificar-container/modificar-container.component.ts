import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Container } from 'src/app/Entidades/container';

@Component({
  selector: 'app-modificar-container',
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.css']
})
export class ModificarContainerComponent implements OnInit {

  @Input() container:Container;
  @Output() enviarEvento:EventEmitter<string>;
  
  constructor() 
  { 
    this.enviarEvento = new EventEmitter<string>();
    this.container = new Container();
  }

  ngOnInit(): void {
  }

  EnviarEvento()
  {
    this.enviarEvento.emit("listar")
  }

}
