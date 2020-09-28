import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  public rutaPadre: boolean = true;
  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    this.router.events.subscribe(x =>{
      if(x instanceof NavigationEnd){
        this.rutaPadre = x.url == "/Juegos";
        console.log(this.rutaPadre);
      }
    });
  }

}
