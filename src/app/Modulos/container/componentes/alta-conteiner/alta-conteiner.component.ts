import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Container } from 'src/app/Entidades/container';

@Component({
  selector: 'app-alta-conteiner',
  templateUrl: './alta-conteiner.component.html',
  styleUrls: ['./alta-conteiner.component.css']
})
export class AltaConteinerComponent implements OnInit {

  public nuevoContainer:Container;
  @Output() enviarEvento:EventEmitter<string>;
  @Output() enviarContainer:EventEmitter<Container>;
  constructor() { 
    this.enviarEvento = new EventEmitter<string>();
    this.enviarContainer = new EventEmitter<Container>();
    this.nuevoContainer = new Container();
  }

  ngOnInit(): void {
  }

  EnviarEvento()
  {
    this.enviarEvento.emit("listar")
    this.enviarContainer.emit(this.nuevoContainer);
  }


}
