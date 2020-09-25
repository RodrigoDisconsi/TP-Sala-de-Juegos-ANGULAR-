import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  public rutaPadre: boolean;
  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    this.rutaPadre = this.router.url == "/Juegos";
  }

}
