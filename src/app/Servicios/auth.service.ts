import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , sendPasswordResetEmail, updatePassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authentication:Auth) { }

  IniciarSesion(email:string, password:string)
  {
    return signInWithEmailAndPassword(this.authentication, email, password);
  }

  CerrarSesion()
  {
    return this.authentication.signOut();
  }

}
