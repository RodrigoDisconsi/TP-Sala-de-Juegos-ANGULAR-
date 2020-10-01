
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {

  public dataSource:any;
  public displayedColumns:string[];

  constructor(
    private juegoService: JuegoServiceService
  ){ 
    this.displayedColumns = ['Usuario', 'Juego', 'Score', 'Fecha'];
  }

  ngOnInit() {
    this.traerTodos();
  }

  traerTodos(){
    this.juegoService.get('resultados').subscribe(result =>{
      this.dataSource = result;
      this.dataSource.forEach(element => {
        let date = new Date(element.fecha).toISOString();
        element.fecha = date;
      });
    });
  }

}
