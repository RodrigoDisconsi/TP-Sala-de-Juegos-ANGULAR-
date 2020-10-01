import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  public mensaje:string;
  public logged:boolean = false;

  constructor(
    private auth: AuthService
  ){ }

  ngOnInit(): void {
    this.auth.user.subscribe(jugador =>{
      if(jugador){
        this.logged = true;
      }
    });
  }

}
