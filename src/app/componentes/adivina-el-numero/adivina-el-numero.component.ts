
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  public mensaje:string;
  public numeroIngresado:number;
  public numeroAleatorio:number;
  public intentos:number;
  public termino:boolean = false;
  public deshabilitar:boolean = false;
 
  constructor(
    private juegoService: JuegoServiceService
  ) { 
    this.comenzarJuego();
    console.log(this.numeroAleatorio);
  }

  comenzarJuego(){
    this.numeroAleatorio = this.generarnumero();
    this.intentos = 8;
  }


  generarnumero():number{
    return Math.floor(Math.random() * 100+0);
  }

  ngOnInit() {
  }

  onJugar(){
    this.deshabilitar = true;
    if(this.numeroIngresado > this.numeroAleatorio){
      this.setMensaje("Es más chico!");
      this.intentos --;
    }
    else if(this.numeroIngresado < this.numeroAleatorio){
      this.setMensaje("Es más grande!");
      this.intentos--;  
    }
    else{
      this.terminarJuego("GANO CON " + this.intentos + " INTENTOS");
      this.juegoService.setResult({
        juego: 'Adivina el número',
        puntaje: this.mensaje
      })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log('Error ->', err);
      });
    }
  }

  terminarJuego(mensaje:string){
    this.mensaje = mensaje;
    this.termino = true;
  }

  setMensaje(mensaje:string){
    this.mensaje = mensaje;
    setTimeout(() => {
      this.deshabilitar = false;
      this.mensaje = "";
      if(this.intentos == 0){
        this.terminarJuego("PERDISTE!!! El número secreto era: " + this.numeroAleatorio);
        this.juegoService.setResult({
          juego: 'Adivina el número',
          puntaje: "PERDIO"
        })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log('Error ->', err);
        });
      }
    }, 1000);
  }

  reiniciar(){
    this.mensaje = null;
    this.numeroIngresado = null;
    this.termino = false;
    this.comenzarJuego();
  }

  onReiniciar(){
    this.reiniciar();
  }

  onKeypress(e){
    if(e.keyCode == 13){
      this.onJugar();
    }
  }
}
