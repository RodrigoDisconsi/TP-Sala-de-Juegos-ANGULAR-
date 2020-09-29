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
      this.displayedColumns = ['Email', 'Username', 'Ingreso'];
    }
    


  async ngOnInit() {
    this.traerTodos();
  }


  traerTodos(){
    this.serviceJugadores.get('jugadores').subscribe(x =>{
      this.dataSource = x;
      console.log(x);
      this.dataSource.forEach(element => {
        let date = new Date(1601317442 * 1000).toISOString();
        element.fechaAcceso = date;
      });
    });
  }


}
