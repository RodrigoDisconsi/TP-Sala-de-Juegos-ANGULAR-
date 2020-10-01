import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';


@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

    public dataSource:any;
    public displayedColumns:string[];
  
  
    constructor(private serviceJugadores:JuegoServiceService) {
      this.displayedColumns = ['Email', 'Username'];
    }
    


  async ngOnInit() {
    this.traerTodos();
  }


  traerTodos(){
    this.serviceJugadores.get('jugadores').subscribe(x =>{
      this.dataSource = x;
    });
  }


}
