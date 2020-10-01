import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public cargando:boolean = false;
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

  ngOnInit() {}

  async onLogin(){
    this.cargando = true;
    try{
      const user = await this.auth.login(this.loginForm.value.username, this.loginForm.value.password);
      if(user){
        this.router.navigateByUrl("");
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

  completarLogin(){
    this.loginForm.setValue({username: "usuario@gmail.com", password: "123456"});
  }

}
