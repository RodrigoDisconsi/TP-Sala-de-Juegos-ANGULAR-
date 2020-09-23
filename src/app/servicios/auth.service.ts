import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../clases/user.interface';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<User>;

  constructor(private fauth:AngularFireAuth, private afs: AngularFirestore) { 
    this.isLoged();
  }

  isLoged(){  
    this.user = this.fauth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
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

  async register(email:string, password:string): Promise<User>{
    try{
      const { user } = await this.fauth.createUserWithEmailAndPassword(email,password);
      return user;
    }
    catch(error){
      console.log('Error->', error);
    }
  }

  async login(email:string, password:string): Promise<User>{
    try{  
        const { user } = await this.fauth.signInWithEmailAndPassword(email,password);
        this.updateUserData(user);
        return user;
    }
    catch (error){
      console.log('Error->', error);
    }
  }

  async loginGoogle(): Promise<User>{
    try{
      const { user } = await this.fauth.signInWithPopup(new auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    }
    catch (error){
      console.log('Error->',error);
    }
  }

  private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data:User = {
      uid:user.uid,
      email:user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    };

    return userRef.set(data, { merge:true });
  }
}
