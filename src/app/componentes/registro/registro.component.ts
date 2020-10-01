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

  public cargando:boolean = false;
  public hide:boolean;
  public mensaje:string;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService) {

  }

  ngOnInit() {}

  async onRegistrar(){
    this.cargando = true;
    try{
      const user = await this.auth.register(this.loginForm.value.email, this.loginForm.value.password, this.loginForm.value.username);
      if(user){
        this.router.navigateByUrl("/Login");
      }
    }
    catch(e){
      this.mensaje = e.message;
      this.cargando = false;
    }
  }

  getErrorMessage(field:string): string{
    let retorno;
    if(this.loginForm.get(field).errors.required){
        retorno = "Campo vacío.";
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
