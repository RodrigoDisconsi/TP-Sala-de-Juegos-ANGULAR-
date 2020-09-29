import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable()
export class JuegoServiceService {

  public user:any;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService) {
      this.auth.user.subscribe(user =>{
        this.user = user;
      });
  }

  public setResult(result:any){
    return this.afs.collection('resultados').add({
      usuario: this.user,
      juego: result.juego,
      puntaje: result.puntaje,
      fecha: Date.now()
    });
  }

  public get(entidad:string) {
    return this.afs.collection(entidad).valueChanges();
  }
}
