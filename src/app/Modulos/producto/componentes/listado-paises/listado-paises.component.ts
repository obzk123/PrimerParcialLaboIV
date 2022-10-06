import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Pais } from 'src/app/Entidades/pais';
import { PaisService } from 'src/app/Servicios/pais.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  @Output() paisSeleccionado:EventEmitter<Pais>;
  constructor(public servicioPaises:PaisService) { 
    this.paisSeleccionado = new EventEmitter<Pais>();
  }

  ngOnInit(): void {
  }

  EnviarPais(pais:string)
  {
    this.servicioPaises.paises.map(p =>
      {
        if(p.nombre == pais)
        {
          this.paisSeleccionado.emit(p);
        }
      });
  }

}
