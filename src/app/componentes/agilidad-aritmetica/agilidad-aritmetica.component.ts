import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  public resultadoIngresado:number;
  public mensaje:string;
  public numeroA:number;
  public numeroB:number;
  public resultado:number;
  public operador:string;
  public termino:boolean = false;
  public loading:boolean = false;

  ngOnInit() {

  }

  constructor() {
    this.comenzarJuego();
  }


  comenzarJuego() {
    this.numeroA = Math.floor(Math.random() * 100+0);
    this.numeroB = Math.floor(Math.random() * 50+0);
    let auxOperador = Math.floor(Math.random() * 4+0);
    switch(auxOperador){
      case 0:
        this.operador = "+";
        this.resultado = this.numeroA + this.numeroB;
        break;
      case 1:
        this.operador = "-";
        this.resultado = this.numeroA - this.numeroB;
        break;
      case 2:
          this.operador = "/";
          this.resultado = this.numeroA / this.numeroB;
          break;
      case 3:
          this.operador = "*";
          this.resultado = this.numeroA * this.numeroB;
          break;
    }
  }

  verificar(){
    if(this.resultadoIngresado == this.resultado){
      this.mensaje = "¡GANASTE!";
    }
    else{
      this.mensaje = "¡PERDISTE!";
    }
    this.termino = true;
    this.loading = false;
  }

  onJugar(){
    this.loading = true;
    setTimeout(() => this.verificar(), 1000);
  }

  onReiniciar(){
    this.loading = true;
    setTimeout(() => this.reiniciar(), 1000);
  }

  reiniciar(){
    this.mensaje = "";
    this.termino = false;
    this.comenzarJuego();
    this.resultadoIngresado = null;
    this.loading = false;
  }

}
