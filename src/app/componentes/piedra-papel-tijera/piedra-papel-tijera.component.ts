import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  
  public tipo:string;
  public jugo:boolean = false;
  public mensaje:string;
  public tipoPc:string;

  // enum Tipo{ ?
  //   piedra = 1,
    
  // }

  constructor() { }

  ngOnInit(): void {
  }

  juega(tipo:string){
    console.log(tipo);
    this.tipo= tipo;
    this.jugo = true;
    setTimeout(() => this.juegaPc(), 500);
  }

  resultado(){
    if((this.tipo == "piedra" && this.tipoPc == "papel") || (this.tipo == "papel" && this.tipoPc == "piedra") || (this.tipo == "tijera" && this.tipoPc == "papel")){
      this.mensaje = "GANASTE";
    }
    else if (this.tipo == this.tipoPc){
      this.mensaje = "EMPATE";
    }
    else{
      this.mensaje = "PERDISTE";
    }
    this.limpiar();
    this.jugo = false;
  }

  limpiar(){
    this.tipo = null;
    this.tipoPc = null;
  }

  juegaPc(){
    let random = Math.floor(Math.random() * 3 + 0);
    if(random == 1){
      this.tipoPc = "piedra";
    }
    else if(random == 2){
      this.tipoPc = "tijera";
    }
    else{
      this.tipoPc = "papel";
    }
    setTimeout(() => this.resultado(), 200);
  }
}
