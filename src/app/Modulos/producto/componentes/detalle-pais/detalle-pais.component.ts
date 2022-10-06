import { Component, OnInit, Input} from '@angular/core';
import { Pais } from 'src/app/Entidades/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() pais:Pais;
  constructor() { 
    this.pais = new Pais();
  }

  ngOnInit(): void {
  }

}
