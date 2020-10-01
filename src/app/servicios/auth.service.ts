import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../clases/user.interface';
import { auth, firestore } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Jugador } from '../clases/jugador';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<Jugador>;

  constructor(private fauth:AngularFireAuth, private afs: AngularFirestore) { 
    this.isLoged();
  }

  isLoged(){  
    this.user = this.fauth.authState.pipe(
      switchMap(jugador => {
        if(jugador){
          return this.afs.doc<Jugador>(`jugadores/${jugador.uid}`).valueChanges();
          // return this.afs.collection(`jugadores/${jugador.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async logout(): Promise<void>{
    try{
      await this.fauth.signOut();
    }
    catch (error){
      console.log('Error->',error);
    }
  }

  async register(email:string, password:string, username:string): Promise<User>{
    try{
      const { user } = await this.fauth.createUserWithEmailAndPassword(email,password);
      await this.afs.collection('jugadores').add({
        email: user.email,
        uid: user.uid,
        username: username,
        fechaAcceso: Date.now()
      });
      return user;
    }
    catch(error){
      console.log('Error->', error);
    }
  }

  async login(email:string, password:string): Promise<User>{
    try{  
        const { user } = await this.fauth.signInWithEmailAndPassword(email,password);
        return user;
    }
    catch (error){
      console.log('Error->', error);
    }
  }

  async loginGoogle(): Promise<User>{
    try{
      const { user } = await this.fauth.signInWithPopup(new auth.GoogleAuthProvider());
      return user;
    }
    catch (error){
      console.log('Error->',error);
    }
  }

  // private updateUserData(user:any){
  //   var base = "jugadores";
  //   const userRef:AngularFirestoreDocument<any> = this.afs.doc(base + `/${user.uid}`);
  //   const data = {
  //     fechaAcceso: new Date()
  //   };

  //   return userRef.set(data, { merge:true });
  // }


}
