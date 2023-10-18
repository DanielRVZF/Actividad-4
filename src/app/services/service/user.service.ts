import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import {createUserWithEmailAndPassword} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({ email, password }: any) { // Meotodo para registrar usuario
    return createUserWithEmailAndPassword(this.auth, email, password); // Función para crear un nuevo usuario 
  }

  login({ email, password }: any) { // metodo para auntetificar correo y contraseña
    return signInWithEmailAndPassword(this.auth, email, password); // Función para autentificar usuario 
  }

  loginWithGoogle() { // Metodo que permite a los usuarios iniciar secion con google
    return signInWithPopup(this.auth, new GoogleAuthProvider()); // Función signInWithPopup en combinación con GoogleAuthProvider, que es una clase que representa la autenticación de Google
  }

  logout() { // Metodo para cerrar la sesion actual 
    return signOut(this.auth); // cierra la sesión 
  }

}
