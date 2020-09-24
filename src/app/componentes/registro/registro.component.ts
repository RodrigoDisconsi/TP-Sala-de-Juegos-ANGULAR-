import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  private subscription: Subscription;
  public hide:boolean;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService) {

  }

  ngOnInit() {
    console.log(this.loginForm.get('username').value);
  }

  async onRegister(){
    try{
      const user = await this.auth.login(this.loginForm.value.username, this.loginForm.value.password);
      if(user){
        console.log(user);
      }
    }
    catch(e){
      console.log("ERROR ->", e);
    }
  }

  getErrorMessage(field:string): string{
    let retorno;
    if(this.loginForm.get(field).errors.required){
        retorno = "Campo vacío."
    }
    else if (this.loginForm.get(field).hasError("minLength")){
      retorno = "Error. Mínimo de carácteres 6";
    }
    return retorno;
  }

  isNotValidField(field:string): boolean{
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) 
    && !this.loginForm.get(field).valid;
  }


}
