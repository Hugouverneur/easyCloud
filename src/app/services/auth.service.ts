import { Injectable } from '@angular/core';
import * as firebaseAuth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string) {
    const auth = firebaseAuth.getAuth();
    firebaseAuth.createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
      })
      .catch((err) => {
        const error = err;
      });
  }

  signIn(email: string, password: string) {
    const auth = firebaseAuth.getAuth();
    firebaseAuth.signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
      })
      .catch((err) => {
        const error = err;
      })
  }

  signOut() {
    const auth = firebaseAuth.getAuth();
    firebaseAuth.signOut(auth);
  }
}
