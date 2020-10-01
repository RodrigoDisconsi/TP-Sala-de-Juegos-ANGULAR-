import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  public listaPalabras:string[] = ["tractor", "clases", "jungla", "angular", "programacion"];
  public palabraJugador:string;
  public palabraSecreta:string;
  public palabraSecretaDesordenada:string;
  public mensaje:string;
  public intentos:number;

  constructor(
    private juegoService: JuegoServiceService
  ) { }

  ngOnInit() {
    this.iniciar();
    console.log(this.palabraSecretaDesordenada);
  }

  iniciar(){
    this.intentos = 5;
    this.palabraSecreta = this.listaPalabras[Math.floor(Math.random() * this.listaPalabras.length+0)];
    this.palabraSecretaDesordenada = this.desordenarPalabra(this.palabraSecreta);
    this.palabraSecretaDesordenada = this.palabraSecretaDesordenada.toUpperCase();
  }

  desordenarPalabra(palabra:string):string{
    let retorno= palabra.split('');
    let listaIndex = [];
    for (let index = 0; index < palabra.length; index++) {
      let aux = Math.floor(Math.random() * (palabra.length+0));
      if((listaIndex.length == 0 || listaIndex.indexOf(aux) == -1) && aux != index){
        listaIndex.push(aux);
        retorno[index] = palabra[aux];
      }
      else
        index --;
      }
      console.log(listaIndex);
      return retorno.join('');
    }

    onJugar(){
      if(this.palabraJugador.toLowerCase() == this.palabraSecreta.toLowerCase()){
        this.mensaje = "GANO";
        this.reniciar();
      }
      else{
        this.intentos--;
        if(this.intentos == 0){
          this.mensaje ="PERDIO";
          this.reniciar();
        }
        else{
          this.mensaje = "Le quedan: " + this.intentos + " intentos";
        }
      }
      console.log(this.mensaje);
    }

    reniciar(){
      setTimeout(() =>{
        this.palabraJugador = null;
        this.juegoService.setResult({
          juego: 'Anagrama',
          puntaje: this.mensaje
        })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log('Error ->', err);
        });
        this.mensaje = null;
        this.iniciar();
      }, 2000);
    }
    
    onKeypress(e){
      if(e.keyCode == 13){
        this.onJugar();
      }
    }
}
