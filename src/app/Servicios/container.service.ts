import { Injectable } from '@angular/core';
import { Container } from '../Entidades/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  public containers:Array<Container>;
  constructor() { 
    this.containers = new Array<Container>();
    this.containers.push(Container.AgregarContainer(0,'azul','empresa1', 20));
    this.containers.push(Container.AgregarContainer(1,'verde','empresa2', 70));
    this.containers.push(Container.AgregarContainer(2,'rojo','empresa3', 100));
  }


}
