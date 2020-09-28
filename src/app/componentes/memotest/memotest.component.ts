import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
 
  public deshabilitar:boolean[] = [];
  public comenzo:boolean;
  public mensaje:string;
  public fotos: string[] = [];
  public arrayUrl: string[] = ['../../../assets/imagenes/hoja.png', '../../../assets/imagenes/telefono.png', '../../../assets/imagenes/auto.png',
  '../../../assets/imagenes/toro.png', '../../../assets/imagenes/toro.png','../../../assets/imagenes/cruz.png','../../../assets/imagenes/circulo.png',
  '../../../assets/imagenes/circulo.png','../../../assets/imagenes/telefono.png','../../../assets/imagenes/hoja.png','../../../assets/imagenes/cruz.png',
  '../../../assets/imagenes/auto.png'];
  public indexAux: any;
  public reiniciar:boolean;
  public fallos:number;

  constructor() { }

  ngOnInit(): void {
    this.comenzarJuego();
  }

  comenzarJuego(){
    this.comenzo = false;
    this.reiniciar = false;
    this.deshabilitar = [];
    this.fallos = 0;
    const listaIndex:number[] = new Array();
    for (let i = 0; i < this.arrayUrl.length; i++) {
      const j = Math.floor(Math.random() * this.arrayUrl.length+0);
      if((listaIndex.length == 0 || listaIndex.indexOf(j) == -1) && i != j){
        const temp = this.arrayUrl[j];
        this.arrayUrl[j] = this.arrayUrl[i];
        this.arrayUrl[i] = temp;
      }
      else{
        i --;
      }
    }
    this.fotos = this.arrayUrl;
  }

  juega(index:number){
    this.fotos[index] = this.arrayUrl[index];
    this.deshabilitar[index] = true;
    if(this.indexAux != null){
      if(this.indexAux != index){
        if(this.fotos[this.indexAux] == this.fotos[index]){
          this.mensaje = "¡BIEEN!";
          this.indexAux = null;
        }
        else{
          setTimeout(() => this.eligioMal(index), 500);
        }
      }
    }
    else{
      this.indexAux = index;
    }
    if(this.verificarGano()){
      this.mensaje = "GANASTEE!";
      this.reiniciar = true;
    }
  }

  verificarGano():boolean{
    let retorno = this.fotos.length == 12;
    for (let i = 0; i < this.fotos.length; i++) {
      if(!this.fotos[i]){
        retorno = false;
        break;
      }
    }
    return retorno;
  }


  eligioMal(index:number){
    this.fallos ++;
    this.mensaje = "Mal - Fallaste "+ this.fallos +" vez";
    this.fotos[this.indexAux] = null;
    this.fotos[index] = null;
    this.deshabilitar[this.indexAux] = false;
    this.deshabilitar[index] = false;
    this.indexAux = null;
  }

  empezar(){
    this.fotos = [];
    this.comenzo = true;
  }

  onReiniciar(){ 
    this.comenzarJuego();
  }
}
