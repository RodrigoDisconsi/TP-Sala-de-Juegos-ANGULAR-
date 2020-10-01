import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public logged;

  constructor(private auth: AuthService) {  }

  ngOnInit() {
    this.auth.user.subscribe(x =>{
      this.logged = x;
    });
  }

 checkSidenav(sidenav){
   if(sidenav._animationState == "open"){
     sidenav.toggle()
   }
 }

 async onLogout(){
   await this.auth.logout();
   this.logged = null;
 }

}
