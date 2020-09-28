
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

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
 
  constructor() { 
    this.comenzarJuego();
    console.log(this.numeroAleatorio);
  }

  comenzarJuego(){
    this.numeroAleatorio = this.generarnumero();
    this.intentos = 5;
  }


  generarnumero():number{
    return Math.floor(Math.random() * 100+0);
  }

  ngOnInit() {
  }

  onJugar(){
    this.deshabilitar = true;
    if(this.numeroIngresado > this.numeroAleatorio){
      this.setMensaje("El número ingresado es mayor");
      this.intentos --;
    }
    else if(this.numeroIngresado < this.numeroAleatorio){
      this.setMensaje("El número ingresado es menor");
      this.intentos--;  
    }
    else{
      this.terminarJuego("GANASTE!");
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
}
