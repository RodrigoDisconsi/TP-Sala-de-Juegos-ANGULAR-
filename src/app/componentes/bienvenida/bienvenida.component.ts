import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  public mensaje:string;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    // this.auth.user.subscribe(jugador =>{
    //   // this.mensaje = jugador.username; A veces me lo trae y a veces no, por eso lo saque y no entiendo el porque.
    //   // console.log(jugador);
    // });
  }

}
