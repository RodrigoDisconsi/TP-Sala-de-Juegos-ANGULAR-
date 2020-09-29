
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {


  constructor(
    private juegoService: JuegoServiceService
  ) {
   }

  ngOnInit() {
    this.juegoService.get('resultados').subscribe(result =>{
      console.log(result);
    });
  }

}
